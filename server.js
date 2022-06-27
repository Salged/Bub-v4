const aoijs = require("aoi.js")
const simplydjs = require("simply-djs");
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
bot.onVoiceStateUpdate();
const voice = new aoijs.Voice(bot, {
soundcloud: {
    clientId: "iZIs9mchVcX5lhVRyQGGAYlNPVldzAoX",
  },
  cache: {
    cacheType: "Memory",//Disk | None
    enabled: true,
  },
}); 
voice.onTrackStart();
voice.onQueueEnd();
voice.onQueueStart();
voice.onTrackEnd();
voice.onAudioError();
voice.trackStartCommand({
        name: "trackStart",
    channel: "$channelID", 
code: `$addButton[2;;4;nomusic1;yes;<:b_net:982970729958101012>]
$addButton[2;;2;queue;false;<:b_queue:983005055596773416>]
$addButton[2;;2;loop;false;<:b_loop:977921370035990589>]
$addButton[2;;2;shuffle;false;<:shuffle:982970819024150540>]
$addButton[2;;4;nomusic;yes;<:b_net:982970729958101012>]
$addbutton[1;;3;звук_вкл;false;<:b_volume1:977921713104879656>] $addbutton[1;;2;skip;false;<:b_skip:977921581282115664>] $addbutton[1;;2;resume;false;<:b_play:977921295633219605>] $addbutton[1;;2;pause;false;<:b_pause:977921512550051871>] $addbutton[1;;4;звук_выкл;false;<:b_volume0:977921645861818439>] 
$description[1;$customemoji[b_play] Сейчас играет
      Название: [$songinfo[title]]($songinfo[url])
      Длительность: $replacetext[$replacetext[$humanizeMS[$songinfo[duration]];s;сек];m;мин]]
$color[1;$getvar[color]]
$image[1;$get[thumbnail]]
$footer[1;$getvar[footer]] $let[thumbnail;$if[$songInfo[thumbnail]!=;$songInfo[thumbnail];$userAvatar[$clientid]]
$addtimestamp[1] 
$setvar[треков_играет;$sum[$getvar[треков_играет];1]]
$setvar[треков_всего;$sum[$getvar[треков_всего];1]]` })

voice.queueStartCommand({
name:"queueStart",
channel: "$channelId",
code: `$channelsendmessage[$getvar[logchannel];На сервере $servername запустили бота]
$setvar[треков_серверов;$sum[$getvar[треков_серверов];1]]`
    })

voice.trackEndCommand({
    name: "trackEnd",
channel: "$channelid",
code: `$setvar[треков_играет;$sub[$getvar[треков_играет];1]]`
})

voice.audioErrorCommand({
    name: "audioError",
channel: "$channelid",
code: `При проигрывании треков произошло ошибка`
})
voice.queueEndCommand({
name: "queueEnd",
channel: "$channelId",
code:`$channelsendmessage[$getvar[logchannel];На сервере $serverName закончили слушать музыку]
$leavevc
$setvar[треков_серверов;$sub[$getvar[треков_серверов];1]]
$setservervar[pause;нет]
$setservervar[loop;false]

Очередь окончена, покидаю голосовой канал `
}) 
