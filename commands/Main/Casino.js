module.exports = {
    name: "casino",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
$if[$random[1;2;1;2]==1] 
$interactionReply[{newEmbed:{title:Победа!}{description:⬆️ ・ Вы выиграли в казино $numberSeparator[$interactionData[options.data[0].value];.]$getvar[wallet]
🧮 ・ Текущий баланс: $getUserVar[korm]}{color:00FF66}}]

  $setUserVar[korm;$sum[$getUserVar[korm];$interactionData[options.data[0].value]]] 
 
  $else  

  $interactionReply[{newEmbed:{title:Проигрыш...}{description:⬇️ ・ Вы потеряли $numberSeparator[$interactionData[options.data[0].value];.]$getvar[wallet]
🧮  ・ Текущий Баланс: $getUserVar[korm]}{color:ff0000}}]

  $setUserVar[korm;$sub[$getUserVar[korm];$interactionData[options.data[0].value]]]

  $endif

$setvar[commands;$sum[$getvar[commands];1]]
$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]

$onlyif[$getuservar[korm]>=$interactionData[options.data[0].value];{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:На вашем балансе нет столько денег}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$interactionData[options.data[0].value]<10000001;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите число до 10.000.000}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$interactionData[options.data[0].value]>=10;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите число больше 10}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$isnumber[$interactionData[options.data[0].value]]==true;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите число!}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$getglobaluservar[blacklist]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:$getvar[color_error]}}{ephemeral}{interaction}]

`
}



