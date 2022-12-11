import type { Guild, GuildChannel } from 'discord.js';

export const guildToString = (guild: Guild): string => {
  return `"${guild.name ?? 'unknown guild'}" (${guild.id})`;
};

export const channelToString = (channel: GuildChannel): string => {
  return `#${channel.name} (${channel.id})`;
};
