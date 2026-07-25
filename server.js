const aoijs = require("aoi.js");
const aoimongo = require("aoi.mongo"); 

const client = new Aoi.Client({
   token: "OTM2OTA2MTUzNTI5NTczMzc2.GRxd6H.uefya2r7hl0HXGGMb1nxl8sHVrfGJtTsFnmZTk",
   prefix: ["+","<@$clientID>","<@!$clientID>"],
   mobilePlatform: true,
   intents: ['Guilds', 'GuildMessages', 'MessageContent'],
   events: ['onMessage', 'onInteractionCreate', "onFunctionError"],   
   suppressAllErrors: true,
   errorMessage: [" ", "{newEmbed:{title: Неизвестная ошибка}{description:При исполнении команды произошла ошибка}{color:RED}}", "{actionRow:{button: Связаться с нами:5:https\\://discord.gg/nmcEtFs35w}}"],
   database: {
      db: aoimongo,
      table: ["main"],
      type: "aoi.mongo",
      path: "mongodb+srv://ayeban:QwEusLFVJ8wTwwn@djtape.gpkma.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    }
});

client.onMessage();
client.loadCommands('./commands/', true);
require('./handler/status')(client) 
require('./handler/variables')(client)
require('./handler/antiCrash')(client) 
require('./handler/callbacks')(client) 
require('./handler/ready')(client)
require('./handler/botJoins')(client)
