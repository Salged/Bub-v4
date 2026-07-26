module.exports = [{
name: "builder",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];$guildid {newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildid  \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]

$setuservar[build_выбор;$randomText[кирпич;техника;покурить]]
$interactionReply[{newEmbed:{author:Работа на строй площадке:$useravatar}{field:Ваша задача#COLON# **$replaceText[$replaceText[$replaceText[$randomText[кирпич;техника;покурить];кирпич;класть кирпич];техника;занести технику];покурить;пойти покурить]**:\n🧱 — класть кирпичи\n💻 — занести технику\n🚬 — пойти покурить}{color:$getvar[color]}}{actionRow:{button:🧱:2:кирпич_$authorid}{button:🖥️:2:техника_$authorid}{button:🚬:2:покурить_$authorid}}{actionRow:{button: Напомнить:1:buildremind_$authorid}}]

$cooldown[50m;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Ваш Буб устал, приходите через %time%}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$getuservar[lvl]>=2;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вашего Буба должен быть 2 уровень и выше. Сейчас: $getuservar[lvl]}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$getglobaluservar[blacklist]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:$getvar[color_error]}}{ephemeral}{interaction}]
`
},
{
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[Напоминание успешно создано!]

$setTimeout[build_remind;50m;{ "userID": "$authorid"}]

$onlyif[$isuserdmenabled[$aurhorid]==true;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: У вас закрыты личные сообщения, я не смогу отправить вам напоминание}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Не вы вызвали данную команду}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buildremind;]`
    }, {
    name: "build_remind",
    type: "timeout",
    code: `$sendDM[Команда \`builder\` снова доступна!;$timeoutdata[userID]]

$onlyif[$isuserdmenabled[$timeoutdata[userID]]==true;]`
    }]
