module.exports = {
    Bot: {
    token: "OTM2OTA2MTUzNTI5NTczMzc2.GRxd6H.uefya2r7hl0HXGGMb1nxl8sHVrfGJtTsFnmZTk",

   prefix: ["+","<@$clientID>","<@!$clientID>"],

mobilePlatform: true,

intents: ["GUILD_MESSAGES", "GUILDS"],
    
suppressAllErrors: false,
errorMessage: [" ", "{newEmbed:{title: Неизвестная ошибка}{description:При исполнении команды произошла ошибка}{color:RED}}", "{actionRow:{button: Связаться с нами:5:https\\://discord.gg/9U8ny4U3TY}}"],
    
    events: { functionError: true}
    }
}
