module.exports = [{
    name: "skins",
    type: "interaction",
    prototype: "slash",
    code: `$setvar[commands;$sum[$getvar[commands];1]]
$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]
$interactionReply[{newEmbed:{title:Магазин скинов Буба}{thumbnail:$userAvatar}{description:Выберите скин из списка ниже, чтобы посмотреть превью и цену}{color:$getvar[color]}}{actionRow:{selectMenu:skinshop_$authorid: Выберите скин:1:1: false:
{stringInput:Зимний Буб — 20.000:1}:
{stringInput:Дракон Буб — 35.000:2}:
{stringInput:Болотный Буб — 50.000:3}:
{stringInput:Буб с дамами — 100.000:4}:
{stringInput:Буб с гетто — 150.000:5}}}]
$onlyif[$getglobaluservar[blacklist]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:$getvar[color_error]}}{ephemeral}{interaction}]`
},
{
    name: "skins-select",
    type: "interaction",
    prototype: "selectMenu",
    code: `
        $interactionReply[{newEmbed:{title:Скин: $get[skinName]}{description:Цена: **$get[skinPrice]**$getvar[wallet]}{image:$get[skinImage]}{color:$getvar[color]}}{actionRow:{button:Купить:2:skinbuy_$get[skin]_$authorid:false}{button:Назад:4:skinback_$authorid:false}}]
        $let[skinImage;$djsEval[require("../handler/skins-data.js")[$get[skin]].image]]
        $let[skinPrice;$djsEval[require("../handler/skins-data.js")[$get[skin]].price]]
        $let[skinName;$djsEval[require("../handler/skins-data.js")[$get[skin]].name]]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Не вы вызвали данную команду}{color:$getvar[color_error]}}{ephemeral}{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==skinshop;]
        $let[skin;$interactionData[values[0]]]
    `
},
{
    name: "skins-buy",
    type: "interaction",
    prototype: "button",
    code: `
        $interactionReply[Поздравляю вас с покупкой скина **$get[skinName]**!]
        $setuservar[img;$get[skinImage]]
        $setuservar[скин_$get[skin];$get[skinImage]]
        $setuservar[korm;$sub[$getuservar[korm];$get[skinPrice]]]
        $onlyif[$getuservar[скин_$get[skin]]==;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас уже приобретён данный скин}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
        $onlyif[$getuservar[korm]>=$get[skinPrice];{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас на балансе слишком мало средств}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
        $let[skinImage;$djsEval[require("../handler/skins-data.js")[$get[skin]].image]]
        $let[skinPrice;$djsEval[require("../handler/skins-data.js")[$get[skin]].price]]
        $let[skinName;$djsEval[require("../handler/skins-data.js")[$get[skin]].name]]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Не вы вызвали данную команду}{color:$getvar[color_error]}}{ephemeral}{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==skinshop;]
        $let[skin;$advancedTextSplit[$interactionData[customId];_;3]]
    `
},
{
    name: "skins-back",
    type: "interaction",
    prototype: "button",
    code: `
        $interactionReply[{newEmbed:{title:Магазин скинов Буба}{thumbnail:$userAvatar}{description:Выберите скин из списка ниже, чтобы посмотреть превью и цену}{color:$getvar[color]}}{actionRow:{selectMenu:skinshop_$authorid: Выберите скин:1:1: false:
{stringInput:Зимний Буб — 20.000:1}:
{stringInput:Дракон Буб — 35.000:2}:
{stringInput:Болотный Буб — 50.000:3}:
{stringInput:Буб с дамами — 100.000:4}:
{stringInput:Буб с гетто — 150.000:5}}}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==$authorid;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Не вы вызвали данную команду}{color:$getvar[color_error]}}{ephemeral}{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==skinshop;]
    `
}];
