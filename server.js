const aoijs = require("aoi.js");
const config = require('./handler/config.js');
const aoimongo = require("aoi.mongo"); 
const bot = new aoijs.Bot(config.Bot);
bot.onMessage();
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")
require('./handler/status')(bot) //This is for bot status file. 
require('./handler/variables')(bot)
require('./handler/antiCrash')(bot) 
require('./handler/callbacks')(bot) 
require('./handler/ready')(bot)
require('./handler/botJoins')(bot)
