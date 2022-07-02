module.exports = ({

name: "addrole",

type: "interaction",

prototype: "slash",

code: `$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $servername | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]
$setservervar[цена_$get[role];$interactionData[options.data[2].value]]

$setservervar[роль_$get[role];$interactionData[options.data[1].value]]

$interactionReply[;{newEmbed:{title: Добавление роли в магазин}{description:Вы добавили роль <@&$interactionData[options.data[1].value]> ценой $interactionData[options.data[2].value]$getvar[wallet] на слот $interactionData[options.data[0].value]}{color:$getglobaluservar[color]}}]

$onlyif[$interactionData[options.data[2].value]<400001;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Максимальная цена роли \`400.000\`$getvar[wallet]}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyif[$interactionData[options.data[2].value]>=1000;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Минимальная цена роли \`1.000\`$getvar[wallet]}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
   $onlyif[$roleposition[$highestrole[$clientid]]<$roleposition[$interactionData[options.data[1].value]];{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Указанная роль выше роли бота}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyif[$ismanaged[$interactionData[options.data[1].value]]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Роль интеграции нельзя добавлять в магазин}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$let[role;$interactionData[options.data[0].value]]
$onlyif[$interactionData[options.data[0].value]<11;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Максимально 10 слотов в магазине!}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyif[$interactionData[options.data[0].value]>=1;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите слот от 1 до 10 включительно}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyif[$isnumber[$interactionData[options.data[0].value]]==true;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите номер слота!}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyperms[manageserver;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы не можете управлять сервером}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]



$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

`

}) 

