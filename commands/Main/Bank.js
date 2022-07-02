module.exports = [({
    name: "bank",
    type: "interaction",
    prototype: "slash",
    code: `
$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $servername | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]
$setuservar[korm;$sub[$getuservar[korm];$interactionData[options.data[0].options[0].value]]]
$setuservar[bank;$sum[$getuservar[bank];$interactionData[options.data[0].options[0].value]]]
$interactionReply[;{newEmbed:{title: Пополнение банковского счёта}{description:Вы положили на свой счёт $interactionData[options.data[0].options[0].value]$getservervar[wallet]}{color:$getglobaluservar[color]}}]
$onlyif[$getuservar[korm]>=$interactionData[options.data[0].options[0].value];{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:На вашем балансе нет столько денег}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$interactionData[options.data[0].options[0].value]<10000001;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите число до 10.000.000}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$interactionData[options.data[0].options[0].value]>=10;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите число больше 10}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$isnumber[$interactionData[options.data[0].options[0].value]]==true;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите число!}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyif[$interactionData[options._subcommand]==put]`
    }), ({
    name: "bank",

    type: "interaction",

    prototype: "slash",

    code: `

$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $servername | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]

$setuservar[korm;$sum[$getuservar[korm];$interactionData[options.data[0].options[0].value]]]

$setuservar[bank;$sub[$getuservar[bank];$interactionData[options.data[0].options[0].value]]]

$interactionReply[;{newEmbed:{title: Пополнение личного кошелька }{description:Вы взяли с своего банковского счёта $interactionData[options.data[0].options[0].value]$getservervar[wallet]}{color:$getglobaluservar[color]}}]

$onlyif[$getuservar[bank]>=$interactionData[options.data[0].options[0].value];{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:На вашем счёте нет столько денег}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$interactionData[options.data[0].options[0].value]<10000001;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите число до 10.000.000}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$interactionData[options.data[0].options[0].value]>=10;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите число больше 10}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$isnumber[$interactionData[options.data[0].options[0].value]]==true;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите число!}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$interactionData[options._subcommand]==take]`

    })]