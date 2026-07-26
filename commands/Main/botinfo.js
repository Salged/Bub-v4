module.exports = ({
name: "bot",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];$guildid {newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildid  \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]

$interactionReply[{newEmbed:{title:$usertag[$clientid] information}{thumbnail:$userAvatar[$clientid]}{field:Статистика бота:>>> **Всего пользователей:** $allMemberscount \n**Всего серверов:** $guildcount \n**Команд использовано:** $getvar[commands] \n**Из них ошибок:** $getvar[commandsError]}{field:Другое:>>> **Включился:** <t:$round[$divide[$sub[$dateStamp;$uptime[ms]];1000]]:R> \n**Разработчик:** [$usertag[$clientownerids]](https://discord.com/users/920735973694902312) \n**Задержка бота:** $replaceText[$replaceText[$checkCondition[$ping<20];true;$pingms ⚪];false;$replaceText[$replaceText[$checkCondition[$ping<30];true;$pingms 🟢];false;$replaceText[$replaceText[$checkCondition[$ping<40];true;$pingms 🟡 ];false;$replaceText[$replaceText[$checkCondition[$ping<60];true;$pingms 🟠 ];false;$replaceText[$replaceText[$checkCondition[$ping<70];true;$pingms 🔴 ];false;$replaceText[$replaceText[$checkCondition[$ping<100];true;$pingms ⚫ ];false;ауе]]]]]]}{field:Версия:>>> **Версия бота:** $getvar[vers]}{color:$getvar[color]}}{actionRow:{button:Добавить бота:5:$getclientinvite[administrator]}{button:Сервер поддержки:5:$getvar[invite]}}]

$onlyif[$getglobaluservar[blacklist]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:$getvar[color_error]}}{ephemeral}{interaction}]
`
})
