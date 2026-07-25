const aoijs = require("aoi.js");
const aoimongo = require("aoi.mongo"); 
const bot = new aoijs.Bot({
token: MTUzMDYzMzA0MTA3MTA1MDk0Mw.Gxx8ag.nsgd-qGc1NBFY_343qlAz3YLK4v4f_tBq_rY3c",
   prefix: ["+","<@$clientID>","<@!$clientID>"],
mobilePlatform: true,
intents: ["GUILD_MESSAGES", "GUILDS"],   
suppressAllErrors: true,
errorMessage: [" ", "{newEmbed:{title: Неизвестная ошибка}{description:При исполнении команды произошла ошибка}{color:RED}}", "{actionRow:{button: Связаться с нами:5:https\\://discord.gg/nmcEtFs35w}}"],
database: {
     db: aoimongo,
    table: ["main"],
     type: "aoi.mongo",
     path: "mongodb+srv://root:root@cluster0.wcbv979.mongodb.net/?appName=Cluster0"
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
