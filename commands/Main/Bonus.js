module.exports = [({
name: "bonus",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];$guildid {newEmbed:{title: Использована новая команда}{description:**Сервер:** $servername  \n**Пользователь:** $guildname | $authorid \n**Команда:** $commandname}}]

$setuservar[korm;$sum[$getuservar[korm];$random[3000;5000]]]
$setuservar[xp;$sum[$getuservar[xp];$random[20;40]]]

$interactionReply[Вы получили свои $random[3000;5000]$getvar[wallet] и $random[20;40]⚗️;;{actionRow:{button: Напомнить:1:bonusremind_$authorid}}]

$cooldown[12h;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Ваш Буб устал, приходите через %time%}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]`
}),
({
    type: "interaction",
    prototype: "button",
    code: `
$interactionReply[Напоминание успешно создано!]

$setTimeout[bonus_remind;12h;{ "userID": "$authorid"}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Не вы вызвали данную команду}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bonusremind;]
`
    }), ({
    name: "bonus_remind",
    type: "timeout",
    code: `$sendDM[Команда \`bonus\` снова доступна!;$timeoutdata[userID]]

$onlyif[$isuserdmenabled[$timeoutdata[userID]]==true;]`
    })]
