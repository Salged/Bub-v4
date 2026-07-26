module.exports = ({
type: "interaction",
prototype: "button",
code: `$interactionReply[{newEmbed:{author:$usertag | 🦠:$useravatar}{description:Вы **изучили собаковирус** и получили $random[3500;6000]$getvar[wallet] и $random[20;45]xp}{color:$getvar[color]}}] 

$setuservar[учёный_выбор;]
$setuservar[korm;$sum[$getuservar[korm];$random[3500;6000]]]
$setuservar[xp;$sum[$getuservar[xp];$random[20;45]]] 

$onlyif[$getuservar[учёный_выбор]==вирус;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title:Произошла ошибка!}{description:Вы должны были выбрать $replacetext[$replacetext[$replacetext[$getuservar[учёный_выбор];вакцина;⚗️];расчёт;📊];вирус;🦠]}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$getuservar[учёный_выбор]!=;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title:Произошла ошибка!}{description:На данный момент для вас нет работы!}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title:Произошла ошибка!}{description:Не вы вызвали данную команду}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==вирус;] 
`
})
