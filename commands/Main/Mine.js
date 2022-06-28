module.exports = ({
name: "mine",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]
$channelsendmessage[$getvar[logchannel];$guildid {newEmbed:{title: Использована новая команда}{description:**Сервер:** $servername  \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]
$let[выбор;$randomText[добыть;взорвать;очистить]]
$interactionReply[;{newEmbed:{author:Работа в глубокой шахте:$useravatar}{field:Ваша задача#COLON# **$randomText[добыть;взорвать;очистить]**:⛏️ — добыть \n🧨 — взорвать \n🏺 — очистить}{color:$getvar[color]}};{actionRow:{button:⛏️:2:добыть_$authorid}{button:🧨:2:взорвать_$authorid}{button:🏺:2:очистить_$authorid}}{actionRow:{button: Напомнить:1:mineremind_$authorid}
$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]`
})
