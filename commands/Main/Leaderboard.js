module.exports = ({
name: "leaderboard",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]
$channelsendmessage[$getvar[logchannel];$guildid {newEmbed:{title: Использована новая команда}{description:**Сервер:** $servername  \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]
$interactionReply[$replacetext[$replacetext[$replacetext[$replacetext[$userLeaderboard[$guildid;korm;asc;{top} - {username}: {value}$getservervar[wallet]];1 -;🥇 -;1];2 -;🥈 -;1];3 -;🥉 -;1];\`;]]

$setuservar[korm;$sum[$getuservar[korm];1]]
$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:$replacetext[$replacetext[$getservervar[lang];ru;Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи];en;You are blocked, please contact [support server]($getvar[invite]) for help]}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]`
})
