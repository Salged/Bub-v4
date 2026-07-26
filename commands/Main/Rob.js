module.exports = [{
    name: "rob",
    $if: "old",
    type: "interaction",
    prototype: "slash",
    code: `$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]

$if[$randomtext[1;2;1;2]==1]
$setuservar[korm;$sum[$getuservar[korm];$get[amount]]]
$setuservar[korm;$sub[$getuservar[korm;$interactiondata[options.data[0].value]];$get[amount]];$interactiondata[options.data[0].value]]

$interactionReply[$usertag украл у <@$interactiondata[options.data[0].value]> $get[amount]$getservervar[wallet]}{actionRow:{button:Напомнить:1:robremind_$authorid:false:⏱️}}]  
 
$elseif[$randomtext[1;2;1;2]==2]
$setuservar[korm;$sub[$getuservar[korm];$get[rob]]]
$setuservar[korm;$sum[$getuservar[korm;$interactiondata[options.data[0].value]];$get[rob]];$interactiondata[options.data[0].value]]

$interactionReply[$usertag попытался украсть деньги у <@$interactiondata[options.data[0].value]>, но был пойман и заплатил штраф $get[rob]$getservervar[wallet] {actionRow:{button: Напомнить:1:robremind_$authorid:false:⏱️}}]
$let[rob;$round[$divide[$get[amount];2]]]
$endelseif
$endif

$let[amount;$round[$multi[$random[5;15];$get[money]]]]
$let[money;$round[$divide[$getuservar[korm;$interactiondata[options.data[0].value]];100]]]

$cooldown[90m;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Подождите %hour%ч. %min%м.}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$getuservar[korm]>=500;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас на руках должно быть минимум 500$getvar[wallet]}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$getuservar[korm;$interactionData[options.data[0].value]]>=500;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У пользователя которого вы хотите ограбить на руках должны быть 500$getvar[wallet]}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$isbot[$interactiondata[options.data[0].value]]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Нельзя грабить жестянку!}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$memberexists[$interactiondata[options.data[0].value]]==true;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Пользователя нет на сервере}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$interactiondata[options.data[0].value]!=$authorid;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Нельзя грабить самого себя}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$getglobaluservar[blacklist]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:$getvar[color_error]}}{ephemeral}{interaction}]
`
    },
                  {

    type: "interaction",
    prototype: "button",
    code: `$interactionReply[Напоминание успешно создано!]

$setTimeout[rob_remind;90m;{ "userID": "$authorid"}]

$onlyif[$isuserdmenabled[$aurhorid]==true;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: У вас закрыты личные сообщения, я не смогу отправить вам напоминание}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Не вы вызвали данную команду}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==robremind;]`
    }, {
    name: "rob_remind",
    type: "timeout",
    code: `$sendDM[Команда \`rob\` снова доступна!;$timeoutdata[userID]]

$onlyif[$isuserdmenabled[$timeoutdata[userID]]==true;]`

    }]
