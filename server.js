const { AoiClient } = require("aoi.js");
const config = require("./config.json"); // если есть файл конфига

const bot = new AoiClient({
  token: process.env.TOKEN || config.BotToken,

  prefix: ["+", "<@$clientID>", "<@!$clientID>"],

  mobilePlatform: true,

  intents: [
    "MessageContent",
    "Guilds",
    "GuildMessages",
    "GuildMembers",
    "GuildPresences",
    "GuildModeration",
    "GuildEmojisAndStickers"
  ],

  events: [
    "onMessage",
    "onInteractionCreate",
    "onJoin",
    "onMessageDelete",
    "onMessageUpdate",
    "onLeave",
    "onBanAdd",
    "onBanRemove",
    "onGuildJoin",
    "onFunctionError",
    "onGuildLeave"
  ],
  aoiLogs: false,
  aoiWarning: false,

  database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "12345678901234567890123456789012",
        path: "/app/data",
    },
  // Обработка ошибок выполнения команд
  suppressAllErrors: true,
  errorMessage: [
    " ",
    "{newEmbed:{title: Неизвестная ошибка}{description:При исполнении команды произошла ошибка}{color:RED}}",
    "{actionRow:{button: Связаться с нами:5:https\\://discord.gg/nmcEtFs35w}}"
  ],

  disableFunctions: ["$clientToken"]
});

// Загрузка команд из папки ./commands/ (второй аргумент – логировать загрузку)
bot.loadCommands("./commands/", true);


require('./handler/botJoins')(bot);

bot.variables(require("./handler/variables.js"));
