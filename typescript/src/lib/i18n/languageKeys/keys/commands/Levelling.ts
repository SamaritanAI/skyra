import type { LanguageHelpDisplayOptions } from '#lib/i18n/LanguageHelp';
import { FT, T } from '#lib/types';
import type { Role, User } from 'discord.js';

export interface LevelTitles {
	experience: string;
	nextIn: string;
	level: string;
}

export interface ProfileTitles {
	globalRank: string;
	credits: string;
	reputation: string;
	experience: string;
	level: string;
}

export const AutoRoleAdd = FT<{ role: Role; points: number }, string>('commands/social:autoRoleAdd');
export const AutoRoleDescription = T('commands/social:autoRoleDescription');
export const AutoRoleExtended = T<LanguageHelpDisplayOptions>('commands/social:autoRoleExtended');
export const AutoRoleListEmpty = T('commands/social:autoRoleListEmpty');
export const AutoRoleRemove = FT<{ role: Role; before: number }, string>('commands/social:autoRoleRemove');
export const AutoRoleUpdate = FT<{ role: Role; points: number; before: number }, string>('commands/social:autoRoleUpdate');
export const AutoRoleUpdateConfigured = T('commands/social:autoRoleUpdateConfigured');
export const AutoRoleUpdateUnconfigured = T('commands/social:autoRoleUpdateUnconfigured');
export const AutoRoleInvalidLevel = FT<{ parameter: string }, string>('commands/social:autoRoleInvalidLevel');
export const AutoRoleInvalidNegativeOrZeroLevel = FT<{ parameter: string }, string>('commands/social:autoRoleInvalidNegativeOrZeroLevel');
export const AutoRoleTooLow = FT<{ parameter: string; minimum: number; maximum: number }, string>('commands/social:autoRoleTooLow');
export const AutoRoleTooHigh = FT<{ parameter: string; minimum: number; maximum: number }, string>('commands/social:autoRoleTooHigh');
export const Balance = FT<{ user: string; amount: number }, string>('commands/social:balance');
export const BalanceBots = T('commands/social:balanceBots');
export const BalanceDescription = T('commands/social:balanceDescription');
export const BalanceExtended = T<LanguageHelpDisplayOptions>('commands/social:balanceExtended');
export const BalanceSelf = FT<{ amount: number }, string>('commands/social:balanceSelf');
export const BannerBought = FT<{ prefix: string; banner: string }, string>('commands/social:bannerBought');
export const BannerBuy = FT<{ banner: string }, string>('commands/social:bannerBuy');
export const BannerDescription = T('commands/social:bannerDescription');
export const BannerExtended = T<LanguageHelpDisplayOptions>('commands/social:bannerExtended');
export const BannerMissing = FT<{ type: string }, string>('commands/social:bannerMissing');
export const BannerMoney = FT<{ money: number; cost: number }, string>('commands/social:bannerMoney');
export const BannerNotExists = FT<{ prefix: string }, string>('commands/social:bannerNotexists');
export const BannerPaymentCancelled = T('commands/social:bannerPaymentCancelled');
export const BannerAllOrUser = T('commands/social:bannerAllOrUser');
export const BannerReset = T('commands/social:bannerReset');
export const BannerResetDefault = T('commands/social:bannerResetDefault');
export const BannerSet = FT<{ banner: string }, string>('commands/social:bannerSet');
export const BannerSetNotBought = T('commands/social:bannerSetNotBought');
export const BannerUserListEmpty = FT<{ prefix: string }, string>('commands/social:bannerUserlistEmpty');
export const DailyCollect = T('commands/social:dailyCollect');
export const DailyDescription = T('commands/social:dailyDescription');
export const DailyExtended = T<LanguageHelpDisplayOptions>('commands/social:dailyExtended');
export const DailyGrace = FT<{ remaining: number }, string>('commands/social:dailyGrace');
export const DailyGraceAccepted = FT<{ amount: number; remaining: number }, string>('commands/social:dailyGraceAccepted');
export const DailyGraceDenied = T('commands/social:dailyGraceDenied');
export const DailyTime = FT<{ time: number }, string>('commands/social:dailyTime');
export const DailyTimeSuccess = FT<{ amount: number }, string>('commands/social:dailyTimeSuccess');
export const DivorceCancel = T('commands/social:divorceCancel');
export const DivorceDescription = T('commands/social:divorceDescription');
export const DivorceDm = FT<{ user: string }, string>('commands/social:divorceDm');
export const DivorceExtended = T<LanguageHelpDisplayOptions>('commands/social:divorceExtended');
export const DivorceSelf = T('commands/social:divorceSelf');
export const DivorceNotTaken = T('commands/social:divorceNotTaken');
export const DivorcePrompt = T('commands/social:divorcePrompt');
export const DivorceSuccess = FT<{ user: string }, string>('commands/social:divorceSuccess');
export const LeaderboardDescription = T('commands/social:leaderboardDescription');
export const LeaderboardExtended = T<LanguageHelpDisplayOptions>('commands/social:leaderboardExtended');
export const LeaderboardHeader = FT<{ guild: string }>('commands/social:leaderboardHeader');
export const LeaderboardNoEntries = T('commands/social:leaderboardNoEntries');
export const LeaderboardUnknownUser = FT<{ user: string }, string>('commands/social:leaderboardUnknownUser');
export const Level = T<LevelTitles>('commands/social:level');
export const LevelDescription = T('commands/social:levelDescription');
export const LevelExtended = T<LanguageHelpDisplayOptions>('commands/social:levelExtended');
export const MarryAccepted = FT<{ author: string; user: string }, string>('commands/social:marryAccepted');
export const MarryAlreadyMarried = FT<{ user: string }, string>('commands/social:marryAlreadyMarried');
export const MarryAuthorMultipleCancel = FT<{ user: string }, string>('commands/social:marryAuthorMultipleCancel');
export const MarryAuthorTaken = FT<{ author: User }, string>('commands/social:marryAuthorTaken');
export const MarryAuthorTooMany = FT<{ limit: number }, string>('commands/social:marryAuthorTooMany');
export const MarryBots = T('commands/social:marryBots');
export const MarryDenied = T('commands/social:marryDenied');
export const MarryDescription = T('commands/social:marryDescription');
export const MarryExtended = T<LanguageHelpDisplayOptions>('commands/social:marryExtended');
export const MarryMultipleCancel = T('commands/social:marryMultipleCancel');
export const MarryNoReply = T('commands/social:marryNoreply');
export const MarryNotTaken = T('commands/social:marryNotTaken');
export const MarryPetition = FT<{ author: User; user: User }, string>('commands/social:marryPetition');
export const MarrySelf = T('commands/social:marrySelf');
export const MarrySkyra = T('commands/social:marrySkyra');
export const MarryAelia = T('commands/social:marryAelia');
export const MarryTaken = FT<{ count: number }, string>('commands/social:marryTaken');
export const MarryTargetTooMany = FT<{ limit: number }, string>('commands/social:marryTargetTooMany');
export const MarryWith = FT<{ users: readonly string[] }, string>('commands/social:marryWith');
export const MarriedDescription = T('commands/social:marriedDescription');
export const MarriedExtended = T<LanguageHelpDisplayOptions>('commands/social:marriedExtended');
export const MyLevel = FT<{ points: number; next: string; user: string }, string>('commands/social:mylevel');
export const MyLevelDescription = T('commands/social:mylevelDescription');
export const MyLevelExtended = T<LanguageHelpDisplayOptions>('commands/social:mylevelExtended');
export const MyLevelNext = FT<{ remaining: number; next: number }, string>('commands/social:mylevelNext');
export const MyLevelSelf = FT<{ points: number; next: string }, string>('commands/social:mylevelSelf');
export const PayDescription = T('commands/social:payDescription');
export const PayExtended = T<LanguageHelpDisplayOptions>('commands/social:payExtended');
export const PayMissingMoney = FT<{ needed: number; has: number }, string>('commands/social:payMissingMoney');
export const PayPrompt = FT<{ user: string; amount: number }, string>('commands/social:payPrompt');
export const PayPromptAccept = FT<{ user: string; amount: number }, string>('commands/social:payPromptAccept');
export const PayPromptDeny = T('commands/social:payPromptDeny');
export const PaySelf = T('commands/social:paySelf');
export const Profile = T<ProfileTitles>('commands/social:profile');
export const ProfileMoney = FT<{ money: number; vault: number }, string>('commands/social:profileMoney');
export const ProfileDescription = T('commands/social:profileDescription');
export const ProfileExtended = T<LanguageHelpDisplayOptions>('commands/social:profileExtended');
export const RemindMeCreate = FT<{ id: string }, string>('commands/social:remindmeCreate');
export const RemindMeCreateNoDescription = T('commands/social:remindmeCreateNoDescription');
export const RemindMeDelete = FT<{ remainingDuration: number; id: number }, string>('commands/social:remindmeDelete');
export const RemindMeDescription = T('commands/social:remindmeDescription');
export const RemindMeExtended = T<LanguageHelpDisplayOptions>('commands/social:remindmeExtended');
export const RemindMeInvalidId = T('commands/social:remindmeInvalidId');
export const RemindMeListEmpty = T('commands/social:remindmeListEmpty');
export const RemindMeNotFound = T('commands/social:remindmeNotfound');
export const RemindMeShowFooter = FT<{ id: number }, string>('commands/social:remindmeShowFooter');
export const Reputation = FT<{ count: number }, string>('commands/social:reputation');
export const ReputationDescription = T('commands/social:reputationDescription');
export const ReputationExtended = T<LanguageHelpDisplayOptions>('commands/social:reputationExtended');
export const ReputationGive = FT<{ user: string }, string>('commands/social:reputationGive');
export const Reputations = FT<{ user: string; points: string }, string>('commands/social:reputations');
export const ReputationsBots = T('commands/social:reputationsBots');
export const ReputationSelf = T('commands/social:reputationSelf');
export const ReputationsSelf = FT<{ points: number }, string>('commands/social:reputationsSelf');
export const ReputationTime = FT<{ remaining: number }, string>('commands/social:reputationTime');
export const ReputationUsable = T('commands/social:reputationUsable');
export const ReputationAvailable = T('commands/social:reputationAvailable');
export const SetColor = FT<{ color: string }, string>('commands/social:setColor');
export const SetColorDescription = T('commands/social:setColorDescription');
export const SetColorExtended = T<LanguageHelpDisplayOptions>('commands/social:setColorExtended');
export const ScoreboardFooter = FT<{ position: number; total: number }, string>('commands/social:scoreboardFooter');
export const SocialAdd = FT<{ user: string; amount: number; count: number }, string>('commands/social:socialAdd');
export const SocialDescription = T('commands/social:socialDescription');
export const SocialExtended = T<LanguageHelpDisplayOptions>('commands/social:socialExtended');
export const SocialMemberNotExists = T('commands/social:socialMemberNotexists');
export const SocialPayBot = T('commands/social:socialPayBot');
export const SocialRemove = FT<{ user: string; amount: number; count: number }, string>('commands/social:socialRemove');
export const SocialReset = FT<{ user: string }, string>('commands/social:socialReset');
export const SocialUnchanged = FT<{ user: string }, string>('commands/social:socialUnchanged');
export const ToggleDarkModeDescription = T('commands/social:toggleDarkModeDescription');
export const ToggleDarkModeDisabled = T('commands/social:toggleDarkModeDisabled');
export const ToggleDarkModeEnabled = T('commands/social:toggleDarkModeEnabled');
export const ToggleDarkModeExtended = T<LanguageHelpDisplayOptions>('commands/social:toggleDarkModeExtended');
export const VaultDescription = T('commands/social:vaultDescription');
export const VaultEmbedData = FT<
	{ coins?: number },
	{ depositedDescription: string; withdrewDescription: string; showDescription: string; accountMoney: string; accountVault: string }
>('commands/social:vaultEmbedData');
export const VaultExtended = T<LanguageHelpDisplayOptions>('commands/social:vaultExtended');
export const VaultNotEnoughInVault = FT<{ vault: number }, string>('commands/social:vaultNotEnoughInVault');
export const VaultNotEnoughMoney = FT<{ money: number }, string>('commands/social:vaultNotEnoughMoney');
export const VaultInvalidAll = FT<{ parameter: string; possibles: readonly string[] }, string>('commands/social:vaultInvalidAll');
