module.exports = ({
    name: "pay",
    type: "interaction",
    prototype: "slash",
    code: `$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $servername | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]
$setuservar[korm;$sum[$getuservar[korm;$interactiondata[options.data[0].value]];$interactiondata[options.data[1].value]];$interactiondata[options.data[0].value]]
$setuservar[korm;$sub[$getuservar[korm];$interactiondata[options.data[1].value]]]
$interactionReply[;{newEmbed:{title:Передача денег}{description:$usertag передал $interactiondata[options.data[1].value]$getservervar[wallet] пользователю <@$interactiondata[options.data[0].value]>}{color:$getglobaluservar[color]}}]
$onlyif[$getuservar[korm]>=$interactionData[options.data[1].value];{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:На вашем балансе нет столько денег}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$interactionData[options.data[1].value]<1000001;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите число до 1.000.000}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$interactionData[options.data[1].value]>=10;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите число больше 10}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$isnumber[$interactionData[options.data[1].value]]==true;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите число!}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyif[$isbot[$interactiondata[options.data[0].value]]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Нельзя передать деньги боту}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyif[$memberexists[$interactiondata[options.data[0].value]]==true;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Пользователя нет на сервере}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyif[$interactiondata[options.data[0].value]!=$authorid;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Нельзя передать деньги самому себе}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]`
    })