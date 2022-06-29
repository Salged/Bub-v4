module.exports = ({
type: "interaction",
prototype: "button",
code: `$interactionReply[;{newEmbed:{author:$usertag | 🧨:$useravatar}{description:Вы **взорвали каменную глыбу** и получили $random[1000;3000]$getvar[wallet] и $random[10;30]⚗️}{color:$getvar[color]}}] 
$setuservar[mine_выбор;]
$setuservar[korm;$sum[$getuservar[korm];$random[1000;3000]]]
$setuservar[xp;$sum[$getuservar[xp];$random[10;30]]] 
$onlyif[$getuservar[mine_выбор]==взорвать;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы должны были выбрать $replacetext[$replacetext[$replacetext[$getuservar[mine_выбор];добыть;⛏️];взорвать;🧨];очистить;🧹]}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyif[$getuservar[mine_выбор]!=;"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:На данный момент для вас нет работы!}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Не вы вызвали данную команду}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==взорвать;] 

`
})
