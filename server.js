const { AoiClient } = require("aoi.js");
const config = require("./config.json"); // если есть файл конфига
const aoimongo = require("@akarui/aoi.mongo"); // пакет для MongoDB

const bot = new AoiClient({
  // Токен – приоритет у переменной окружения, иначе из конфига
  token: process.env.TOKEN || config.BotToken,

  // Массив префиксов (включая упоминания бота)
  prefix: ["+", "<@$clientID>", "<@!$clientID>"],

  // Мобильный статус (отображается как "играет на мобильном")
  mobilePlatform: true,

  // Интенты для Discord.js v14 (новые названия)
  intents: [
    "MessageContent",
    "Guilds",
    "GuildMessages",
    "GuildMembers",
    "GuildPresences",
    "GuildModeration",
    "GuildEmojisAndStickers"
  ],

  // События, которые будут обрабатываться
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
    "onFunctionError"
  ],

  // Отключаем лишние логи и предупреждения
  aoiLogs: false,
  aoiWarning: false,

  // Подключение к MongoDB через aoi.mongo
  database: {
    type: "aoi.mongo",
    db: aoimongo,
    path: "mongodb+srv://root:root@cluster0.wcbv979.mongodb.net/?appName=Cluster0", // ваша строка подключения
    tables: ["main"] // таблицы (коллекции) для хранения данных
  },

  // Обработка ошибок выполнения команд
  suppressAllErrors: true,
  errorMessage: [
    " ",
    "{newEmbed:{title: Неизвестная ошибка}{description:При исполнении команды произошла ошибка}{color:RED}}",
    "{actionRow:{button: Связаться с нами:5:https\\://discord.gg/nmcEtFs35w}}"
  ],

  // Защита: запрещаем использовать $clientToken в коде
  disableFunctions: ["$clientToken"]
});

// Загрузка команд из папки ./commands/ (второй аргумент – логировать загрузку)
bot.loadCommands("./commands/", true);

// Подключение дополнительных обработчиков (статус, переменные, антикраш и т.д.)
require('./handler/status')(bot);
require('./handler/antiCrash')(bot);
require('./handler/callbacks')(bot);
require('./handler/ready')(bot);
require('./handler/botJoins')(bot);

bot.variables(require("./handler/variables.js"));