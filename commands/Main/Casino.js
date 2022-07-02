

module.exports = {

    name: "casino",

    type: "interaction",

    prototype: "slash",

    $if: "v4",

    code: `
$if[$random[1;2;1;2]==1]
  
  
$interactionReply[;{newEmbed:{title:Победа!}{description:\`⬆️\` ・ Вы успешно победили в казино и выиграли $numberSeparator[$interactionData[options.data[0].value];.]$getservervar[wallet]
  \`🧮\` ・ Текущий баланс: $getUserVar[korm]}{color:00FF66}}]
  $setUserVar[korm;$sum[$getUserVar[korm];$interactionData[options.data[0].value]]]
  
  $else
  
  
  $interactionReply[;{newEmbed:{title:Проигрыш...}{description:\`⬇️\` ・ Вы проиграли в казино и у вас забрали $numberSeparator[$interactionData[options.data[0].value];.]$getservervar[wallet]
  \`🧮\`  ・ Текущий Баланс: $getUserVar[korm]}{color:ff0000}]
  $setUserVar[korm;$sub[$getUserVar[korm];$interactionData[options.data[0].value]]]


  $endif

$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $servername | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]
$onlyif[$getuservar[korm]>=$interactionData[options.data[0].value];{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:На вашем балансе нет столько денег}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$interactionData[options.data[0].value]<10000001;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите число до 10.000.000}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$interactionData[options.data[0].value]>=10;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите число больше 10}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$isnumber[$interactionData[options.data[0].value]]==true;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите число!}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
`

}



