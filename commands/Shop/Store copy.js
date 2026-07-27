module.exports = [{
    name: "store",
    type: "interaction",
    prototype: "slash",
    code: `$setvar[commands;$sum[$getvar[commands];1]]
$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]

$interactionReply[{newEmbed:{title: Магазин сервера $guildName}{description:$get[shopLines]}{color:$getvar[color]}}{actionRow:{selectMenu:buyrole_$authorid: Выберите роль для покупки:1:1: false:$get[shopOptions]}}]

$let[shopOptions;$textSplitMap[shop_option]]
$let[shopLines;$textSplitMap[shop_line]]
$textSplit[$get[shop];,]

$onlyif[$get[shop]!=;Магазин сервера пуст{interaction}]
$let[shop;$getguildvar[shop]]

$onlyif[$getglobaluservar[blacklist]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:$getvar[color_error]}}{ephemeral}{interaction}]
`
},
{
    name: "buy_role",
    type: "interaction",
    prototype: "selectMenu",
    code: `
        $interactionReply[{newEmbed:{title: Покупка роли}{description:Вы купили роль <@&$get[roleId]> за $get[price]$getvar[wallet]}{color:$getvar[color]}}]

        $setuservar[korm;$sub[$getuservar[korm];$get[price]]]
        $giveroles[$guildid;$authorid;$get[roleId]]
        $onlybotperms[manageroles;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Я не могу выдать вам роль!}{color:$getvar[color_error]}}{ephemeral}{interaction}]
        $onlyif[$roleposition[$userhighestrole[$clientid]]<$roleposition[$get[roleId]];{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Данная роль выше роли бота, я не могу её выдать}{color:$getvar[color_error]}}{ephemeral}{interaction}]
        $onlyif[$hasroles[$guildid;$authorid;$get[roleId]]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас уже имеется данная роль}{color:$getvar[color_error]}}{ephemeral}{interaction}]
        $onlyif[$getuservar[korm]>=$get[price];{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Вам не хватает средств для покупки данной роли}{color:$getvar[color_error]}}{ephemeral}{interaction}]
        $let[price;$splitText[2]]
        $let[roleId;$splitText[1]]
        $textSplit[$interactionData[values[0]];:]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Не вы вызвали данную команду}{color:$getvar[color_error]}}{ephemeral}{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buyrole;]
        $onlyif[$getglobaluservar[blacklist]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:$getvar[color_error]}}{ephemeral}{interaction}]
    `
}];