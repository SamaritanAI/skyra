import { LanguageKeys } from '#lib/i18n/languageKeys';
import { ModerationData, ModerationTask } from '#lib/moderation';
import { getSecurity } from '#utils/functions';
import { fetchT } from '@sapphire/plugin-i18next';
import { Guild, Permissions } from 'discord.js';

export class UserModerationTask extends ModerationTask {
	protected async handle(guild: Guild, data: ModerationData<{ oldName: string }>) {
		const me = guild.members.me ?? (await guild.members.fetch(this.container.client.id!));
		if (!me.permissions.has(Permissions.FLAGS.MANAGE_NICKNAMES)) return null;

		const t = await fetchT(guild);
		await getSecurity(guild).actions.unSetNickname(
			{
				moderatorId: process.env.CLIENT_ID,
				userId: data.userID,
				reason: `[MODERATION] Nickname reverted after ${t(LanguageKeys.Globals.DurationValue, { value: data.duration })}`
			},
			data.extraData.oldName,
			await this.getTargetDM(guild, await this.container.client.users.fetch(data.userID))
		);
		return null;
	}
}
