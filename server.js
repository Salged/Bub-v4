const aoijs = require("aoi.js");
const aoimongo = require("aoi.mongo"); 
const bot = new aoijs.Bot({
token: "OTM2OTA2MTUzNTI5NTczMzc2.GRxd6H.uefya2r7hl0HXGGMb1nxl8sHVrfGJtTsFnmZTk",
   prefix: ["+","<@$clientID>","<@!$clientID>"],
mobilePlatform: true,
intents: ["GUILD_MESSAGES", "GUILDS"],   
suppressAllErrors: false,
errorMessage: [" ", "{newEmbed:{title: Неизвестная ошибка}{description:При исполнении команды произошла ошибка}{color:RED}}", "{actionRow:{button: Связаться с нами:5:https\\://discord.gg/9U8ny4U3TY}}"],
database: {
     db: aoimongo,
     type: "aoi.mongo",
     path: "mongodb+srv://ayeban:QwEusLFVJ8wTwwn@djtape.gpkma.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
},    
 events: { functionError: true} 
});
bot.onMessage();
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")
require('./handler/status')(bot) //This is for bot status file. 
require('./handler/variables')(bot)
require('./handler/antiCrash')(bot) 
require('./handler/callbacks')(bot) 
require('./handler/ready')(bot)
require('./handler/botJoins')(bot)
