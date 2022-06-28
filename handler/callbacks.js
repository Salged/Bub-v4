module.exports = (bot) => {
bot.onBanAdd();
bot.onBanRemove();
bot.onInteractionCreate();
bot.onChannelCreate();
bot.onChannelUpdate();
bot.onChannelDelete();
bot.onRoleCreate();
bot.onRoleUpdate();
bot.onRoleDelete();
bot.onMessageUpdate();
bot.onMessageDelete();
bot.onVoiceStateUpdate();
bot.onGuildJoin();
bot.onGuildLeave();
bot.onRateLimit();

}