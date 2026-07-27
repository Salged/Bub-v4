const { AoiClient } = require("aoi.js");
const config = require("./config.json"); // если есть файл конфига

const client = new AoiClient({
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
client.loadCommands("./commands/", true);
client.variables(require("./handler/variables.js"));
client.awaitedCommand({
    name: "shop_line",
    code: `<@&$splitText[1]> — $splitText[2]$getvar[wallet]
$textSplit[$message[1];:]`
});

client.awaitedCommand({
    name: "shop_option",
    code: `{stringInput:Роль за $splitText[2]$getvar[wallet]:$splittext[1]-$splittext[2]:Нажмите чтобы купить эту роль:false}
$textSplit[$message[1];:]`
});