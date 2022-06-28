module.exports = {
    Bot: {
    token: "OTM2OTA2MTUzNTI5NTczMzc2.YfT_2Q.W4g2dNbHz_mZ5LS1x0qKlBjxJvc",

   prefix: ["+","<@$clientID>","<@!$clientID>"],

mobilePlatform: true,

intents: ["GUILD_MESSAGES", "GUILDS"],
    
suppressAllErrors: false,
errorMessage: [" ", "{newEmbed:{title: Неизвестная ошибка}{description:При исполнении команды произошла ошибка}{color:RED}}", "{actionRow:{button: Связаться с нами:5:https\\://discord.gg/9U8ny4U3TY}}"],
    
    events: { functionError: true}
    }
}
