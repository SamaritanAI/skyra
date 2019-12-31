import Collection, { CollectionConstructor } from '@discordjs/collection';
import { KlasaGuild } from 'klasa';
import { APIErrors } from '../constants';
import { GuildMember, Role } from 'discord.js';
import { CLIENT_ID } from '../../../../config';

export class MemberTags extends Collection<string, MemberTag> {

	public readonly guild: KlasaGuild;

	public constructor(guild: KlasaGuild) {
		super();
		this.guild = guild;
	}

	public create(member: GuildMember) {
		const tag: MemberTag = {
			nickname: member.nickname || null,
			roles: this.getRawRoles(member)
		};
		super.set(member.id, tag);
		this.guild.client.userTags.create(member.user);
		return tag;
	}

	public getFirstKeyFromUserName(username: string) {
		for (const [key, value] of this.guild.client.userTags) {
			if (username === value.username) return key;
		}

		return null;
	}

	public getKeyFromTag(tag: string) {
		const pieces = tag.split('#');
		if (pieces.length !== 2 || pieces[1].length !== 4) return;

		const [username, discriminator] = pieces;
		for (const [key, value] of this.guild.client.userTags) {
			if (username === value.username && discriminator === value.discriminator) return key;
		}

		return null;
	}

	public async fetch(id: string): Promise<MemberTag | null>;
	public async fetch(): Promise<this>;
	public async fetch(id?: string): Promise<MemberTag | null | this> {
		if (typeof id === 'undefined') {
			const members = await this.guild.members.fetch();
			for (const member of members.values()) this.create(member);
			return this;
		}

		const existing = this.get(id);
		if (typeof existing !== 'undefined') return existing;

		try {
			const member = await this.guild.members.fetch(id);
			return this.create(member);
		} catch (error) {
			if (error.code === APIErrors.UnknownMember) return null;
			throw error;
		}
	}

	public mapUsernames() {
		const output = new Collection<string, string>();
		for (const key of this.keys()) {
			const userTag = this.guild.client.userTags.get(key);
			if (typeof userTag !== 'undefined') output.set(key, userTag.username);
		}

		return output;
	}

	public *manageableMembers() {
		const skyraHighestRole = this.getSkyraHighestRole();
		if (skyraHighestRole === null) throw new Error('Unreachable.');

		const skyraPosition = skyraHighestRole.position;
		const nonManageableRoles = this.guild.roles.filter(role => role.position >= skyraPosition);
		if (nonManageableRoles.size === 0) {
			yield *this.entries();
		} else {
			for (const tag of this.entries()) {
				if (tag[1].roles.some(role => nonManageableRoles.has(role))) continue;
				yield tag;
			}
		}
	}

	public static get [Symbol.species](): CollectionConstructor {
		return Collection as unknown as CollectionConstructor;
	}

	private getRawRoles(member: GuildMember) {
		const casted = member as unknown as { _roles: string[] } & GuildMember;
		return casted._roles;
	}

	private getSkyraHighestRole() {
		const guildSelfMember = this.guild.me;
		if (guildSelfMember !== null) return guildSelfMember.roles.highest;

		const rawGuildSelfMember = this.get(CLIENT_ID);
		if (typeof rawGuildSelfMember === 'undefined') return null;

		let highest: Role | null = null;
		for (const roleID of rawGuildSelfMember.roles) {
			const role = this.guild.roles.get(roleID);
			if (typeof role === 'undefined') continue;

			if (highest === null || highest.position < role.position) highest = role;
		}

		return highest;
	}

}

export interface MemberTag {
	nickname: string | null;
	roles: readonly string[];
}