const aoijs = require("aoi.js")
const config = require('./handler/config.js'); //This will be our configuration file. I didn't want your main file be messy. 
const bot = new aoijs.Bot(config.Bot);
bot.onMessage();
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")
require('./handler/status')(bot) //This is for bot status file. 
require('./handler/variables')(bot) //This is for bot variables file. 
require('./handler/callbacks')(bot)
require('./handler/antiCrash')(bot) 
require('./handler/ready')(bot)
require('./handler/botJoins')(bot)
