module.exports = ({
name: "leaderboard",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];$guildid {newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildid  \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]

$interactionReply[{newEmbed:{title:Таблица лидеров сервера по $if[$get[type]==bank;деньгам на счету;деньгам на руках}{description:$replacetext[$replacetext[$replacetext[$userLeaderboard[$guildid;$get[type];asc;{top} - {username}: {value}$getvar[wallet]];1 -;🥇 -;1];2 -;🥈 -;1];3 -;🥉 -;1]}{color:$getvar[color]}}]

$onlyif[$userLeaderboard[$guildid;$get[type];asc;{top} - {username}: {value}$getvar[wallet]]!=;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title:Произошла ошибка!}{description:Данная таблица лидеров пуста}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$let[type;$interactionData[options.data[0].value]]

$onlyif[$getglobaluservar[blacklist]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title:Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:$getvar[color_error]}}{ephemeral}{interaction}]
`
})
