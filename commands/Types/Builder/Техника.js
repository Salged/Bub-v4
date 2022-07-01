module.exports = ({
type: "interaction",
prototype: "button",
code: `$interactionReply[;{newEmbed:{author:$usertag | 🖥️:$useravatar}{description:Вы **занесли технику на $random[1;20] этаж нового здания Яндекса** и получили $random[2000;4000]$getvar[wallet] и $random[15;35]xp}{color:$getvar[color]}}] 
$setuservar[build_выбор;]
$setuservar[korm;$sum[$getuservar[korm];$random[2000;4000]]]
$setuservar[xp;$sum[$getuservar[xp];$random[15;35]]] 
$onlyif[$getuservar[build_выбор]==техника;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы должны были выбрать $replacetext[$replacetext[$replacetext[$getuservar[build_выбор];покурить;🚬];кирпич;🧱];техника;🖥️]}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyif[$getuservar[build_выбор]!=;"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:На данный момент для вас нет работы!}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Не вы вызвали данную команду}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==техника;] 
`
})
