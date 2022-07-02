module.exports = [({
name: "mine",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]
$channelsendmessage[$getvar[logchannel];$guildid {newEmbed:{title: Использована новая команда}{description:**Сервер:** $servername  \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]
$setuservar[mine_выбор;$replacetext[$replacetext[$getservervar[lang];ru;$randomText[добыть;взорвать;очистить]];en;$randomText[mine;detonate;clear]]]
$interactionReply[;{newEmbed:{author:$replacetext[$replacetext[$getservervar[lang];ru;Работа в глубокой шахте];en;Working in a deep mine]:$useravatar}{field:$replacetext[$replacetext[$getservervar[lang];ru;Ваша задача];en;You task]#COLON# **$replacetext[$replacetext[$getservervar[lang];ru;$randomText[добыть;взорвать;очистить]];en;$randomText[mine;detonate;clear]]**:⛏️ — $replacetext[$replacetext[$getservervar[lang];ru;добыть];en;mine] \n🧨 — $replacetext[$replacetext[$getservervar[lang];ru;взорвать];en;detonate] \n🧹 — $replacetext[$replacetext[$getservervar[lang];ru;очистить];en;clear]}{color:$getvar[color]}};{actionRow:{button:⛏️:2:добыть_$authorid}{button:🧨:2:взорвать_$authorid}{button:🧹:2:очистить_$authorid}}{actionRow:{button:$replacetext[$replacetext[$getservervar[lang];ru;Напомнить];en;Remind]:1:mineremind_$authorid}}]
$cooldown[30m;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title:$replacetext[$replacetext[$getservervar[lang];ru;Произошла ошибка];en;An error has occurred]!}{description:Ваш Буб устал, приходите через %time%}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title:$replacetext[$replacetext[$getservervar[lang];ru;Произошла ошибка];en;An error has occurred]!}{description:$replacetext[$replacetext[$getservervar[lang];ru;Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи];en;You are blocked, please contact [support server]($getvar[invite]) for help]}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]`
}),
({
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[$replacetext[$replacetext[$getservervar[lang];ru;Напоминание успешно создано];en;Reminder created successfully]!]
$setTimeout[mine_remind;30m;{ "userID": "$authorid"}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title:$replacetext[$replacetext[$getservervar[lang];ru;Произошла ошибка];en;You did not call this command]!}{description:$replacetext[$replacetext[$getservervar[lang];ru;Не вы вызвали данную команду];en;You did not call this command]}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==mineremind;]`
    }), ({
    name: "mine_remind",
    type: "timeout",
    code: `$sendDM[$replacetext[$replacetext[$getservervar[lang];ru;Команда \`mine\` снова доступна];en;\`mine\` command is available again]!;$timeoutdata[userID]]
$onlyif[$isuserdmenabled[$timeoutdata[userID]]==true;]`
    })]
