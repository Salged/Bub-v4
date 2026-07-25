module.exports = ({
name: "leaderboard",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];$guildid {newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildid  \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]

$interactionReply[{newEmbed:{title:Таблица лидеров сервера по деньгам на руках}{description:$replacetext[$replacetext[$replacetext[$userLeaderboard[$guildid;korm;asc;{top} - {username}: {value}$getvar[wallet]];1 -;🥇 -;1];2 -;🥈 -;1];3 -;🥉 -;1]}{color:$getvar[color]}}{newEmbed:{title:Таблица лидеров сервера по деньгам на счету}{description:$replacetext[$replacetext[$replacetext[$userLeaderboard[$guildid;bank;asc;{top} - {username}: {value}$getvar[wallet]];1 -;🥇 -;1];2 -;🥈 -;1];3 -;🥉 -;1]}{color:$getvar[color]}}]

$setuservar[korm;$sum[$getuservar[korm];1]]
$setuservar[bank;$sum[$getuservar[bank];1]]

$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title:Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]`
})
