module.exports = ({
name: "buy_role",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]

$setuservar[korm;$sub[$getuservar[korm];$getservervar[цена_$get[role]]]]
$interactionReply[;{newEmbed:{title: Покупка роли}{description:Вы купили роль <@&$getservervar[роль_$get[role]]> за $getservervar[цена_$get[role]]$getvar[wallet]}{color:$getglobaluservar[color]}}]
$giveroles[$guildid;$authorid;$getservervar[роль_$get[role]]]

$onlyif[$getuservar[korm]>=$getservervar[цена_$get[role]];{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Вам не хватает средств для покупки данной роли}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$hasroles[$guildid;$authorid;$getservervar[роль_$get[role]]]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас уже имеется данная роль}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$roleposition[$highestrole[$clientid]]<$roleposition[$getservervar[роль_$get[role]]];{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Данная роль выше роли бота, я не могу ее выдать}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$roleexists[$getservervar[роль_$get[role]]]==true;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Роли которую я должен выдать не существует }{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$let[role;$interactionData[options.data[0].value]]
$onlyif[$interactionData[options.data[0].value]<11;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Максимально 10 слотов в магазине!}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$interactionData[options.data[0].value]>=1;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите слот от 1 до 10 включительно}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$isnumber[$interactionData[options.data[0].value]]==true;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите номер слота!}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyBotperms[manageroles;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Я не могу выдать вам роль!}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
`

}) 

