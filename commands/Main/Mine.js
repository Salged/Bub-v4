module.exports = [({
name: "mine",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]
$channelsendmessage[$getvar[logchannel];$guildid {newEmbed:{title: Использована новая команда}{description:**Сервер:** $servername  \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]
$setuservar[mine_выбор;$replacetext[$replacetext[$getservervar[lang];ru;$randomText[добыть;взорвать;очистить]];en;$randomText[mine;detonate;clear]]]
$interactionReply[;{newEmbed:{author:$replacetext[$replacetext[$getservervar[lang];ru;Работа в глубокой шахте];en;Working in a deep mine]:$useravatar}{field:$replacetext[$replacetext[$getservervar[lang];ru;Ваша задача];en;You task]#COLON# **$replacetext[$replacetext[$getservervar[lang];ru;$randomText[добыть;взорвать;очистить]];en;$randomText[mine;detonate;clear]]**:⛏️ — $replacetext[$replacetext[$getservervar[lang];ru;добыть];en;mine] \n🧨 — $replacetext[$replacetext[$getservervar[lang];ru;взорвать];en;detonate] \n🧹 — $replacetext[$replacetext[$getservervar[lang];ru;очистить];en;clear]}{color:$getvar[color]}};{actionRow:{button:⛏️:2:добыть_$authorid}{button:🧨:2:взорвать_$authorid}{button:🧹:2:очистить_$authorid}}{actionRow:{button: Напомнить:1:mineremind_$authorid}}]
$cooldown[30m;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Ваш Буб устал, приходите через %time%}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]`
}),
({
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[Напоминание успешно создано!]
$setTimeout[mine_remind;30m;{ "userID": "$authorid"}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Не вы вызвали данную команду}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==mineremind;]`
    }), ({
    name: "mine_remind",
    type: "timeout",
    code: `$sendDM[Команда \`mine\` снова доступна!;$timeoutdata[userID]]
$onlyif[$isuserdmenabled[$timeoutdata[userID]]==true;]`
    })]
