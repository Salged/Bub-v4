module.exports = ({
type: "interaction",
prototype: "button",
code: `$interactionReply[{newEmbed:{author:$usertag | 🧹:$useravatar}{description:Вы **очистили рабочую площадку** и получили $random[1000;3000]$getvar[wallet] и $random[10;30]⚗️}{color:$getvar[color]}}] 

$setuservar[mine_выбор;]
$setuservar[korm;$sum[$getuservar[korm];$random[1000;3000]]]
$setuservar[xp;$sum[$getuservar[xp];$random[10;30]]] 

$onlyif[$getuservar[mine_выбор]==очистить;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы должны были выбрать $replacetext[$replacetext[$replacetext[$getuservar[mine_выбор];добыть;⛏️];взорвать;🧨];очистить;🧹]}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$getuservar[mine_выбор]!=;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:На данный момент для вас нет работы!}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Не вы вызвали данную команду}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==очистить;] 

`
})
