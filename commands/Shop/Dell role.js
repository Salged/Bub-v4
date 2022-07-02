module.exports = ({

name: "delete_role",

type: "interaction",

prototype: "slash",

code: `

$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $servername | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]
$setservervar[роль_$get[role];none]

$setservervar[цена_$get[role];none]

$interactionReply[;{newEmbed:{title: Удаление роли из магазина}{description:Вы удалили роль <@&$getservervar[роль_$get[role]]>, её цена была $getservervar[цена_$get[role]]$getvar[wallet]}}]

$onlyif[$roleexists[$getservervar[роль_$get[role]]]==true;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Указанного слота в магазине не существует}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$let[role;$interactionData[options.data[0].value]]



$onlyif[$interactionData[options.data[0].value]<11;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Максимально 10 слотов в магазине!}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$interactionData[options.data[0].value]>=1;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите слот от 1 до 10 включительно}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$isnumber[$interactionData[options.data[0].value]]==true;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите номер слота!}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyperms[manageserver;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы не администратор}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]


$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
`



}) 

