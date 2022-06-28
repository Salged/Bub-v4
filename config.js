module.exports = {
    Bot: {
    token: "OTgxNjU2MTgxODYyOTg1NzU5.Gaus36.deqhdqQmP9_xcydthyqEdT5LhFDwPKPKC3s580",

   prefix: ["q!","<@$clientID>","<@!$clientID>"],

mobilePlatform: true,

intents: ["GUILD_MESSAGES", "GUILDS", "GUILD_VOICE_STATES", "GUILD_INVITES", "GUILD_WEBHOOKS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS"],
    
suppressAllErrors: false,
errorMessage: [" ", "{newEmbed:{title: Неизвестная ошибка}{description:При исполнении команды произошла ошибка}{color:RED}}", "{actionRow:{button: Связаться с нами:5:https\\://discord.gg/9U8ny4U3TY}}"],
    
    events: { functionError: true}
    }
}