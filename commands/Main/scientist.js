module.exports = [({
name: "scientist",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]
$channelsendmessage[$getvar[logchannel];$guildid {newEmbed:{title: Использована новая команда}{description:**Сервер:** $servername  \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]
$setuservar[учёный_выбор;$randomText[вирус;вакцина;расчёт]]
$interactionReply[;{newEmbed:{author:Работа в лаборатории:$useravatar}{field:Ваша задача#COLON# **$replaceText[$replaceText[$replaceText[$randomText[вирус;вакцина;расчёт];вирус;изучить вирус];вакцина;изобрести вакцину];расчёт;делать расчёты]**:\n🦠 - изучить вирус\n⚗️ - изобрести вакцину\n📊 - делать расчёты}{color:$getvar[color]}};{actionRow:{button:🦠:2:вирус_$authorid}{button:⚗️:2:вакцина_$authorid}{button:📊:2:расчёт_$authorid}}{actionRow:{button: Напомнить:1:учёныйremind_$authorid}}]
$cooldown[70m;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Ваш Буб устал, приходите через %time%}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyif[$getuservar[lvl]>=4;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вашего Буба должен быть 4 уровень и выше}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]`
}),
({
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[Напоминание успешно создано!]
$setTimeout[учёный_remind;70m;{ "userID": "$authorid"}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Не вы вызвали данную команду}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==учёныйremind;]`
    }), ({
    name: "учёный_remind",
    type: "timeout",
    code: `$sendDM[Команда \`scientist\` снова доступна!;$timeoutdata[userID]]
$onlyif[$isuserdmenabled[$timeoutdata[userID]]==true;]`
    })]
