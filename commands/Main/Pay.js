module.exports = ({
    name: "pay",
    type: "interaction",
    prototype: "slash",
    code: `$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]

$setuservar[korm;$sum[$getuservar[korm;$interactiondata[options.data[0].value]];$interactiondata[options.data[1].value]];$interactiondata[options.data[0].value]]
$setuservar[korm;$sub[$getuservar[korm];$interactiondata[options.data[1].value]]]

$interactionReply[$usertag, вы передали $interactiondata[options.data[1].value]$getvar[wallet] пользователю <@$interactiondata[options.data[0].value]> $getvar[bub_krutoi]]

$onlyif[$getuservar[korm]>=$interactionData[options.data[1].value];{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:На вашем балансе нет столько денег}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$interactionData[options.data[1].value]<1000001;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите число до 1.000.000}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$interactionData[options.data[1].value]>=10;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите число больше 10}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$isnumber[$interactionData[options.data[1].value]]==true;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите число!}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$isbot[$interactiondata[options.data[0].value]]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Нельзя передать деньги боту}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$memberexists[$interactiondata[options.data[0].value]]==true;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Пользователя нет на сервере}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$interactiondata[options.data[0].value]!=$authorid;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Нельзя передать деньги самому себе}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$getglobaluservar[blacklist]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:$getvar[color_error]}}{ephemeral}{interaction}]
`
    })
