module.exports = [{
    name: "skins",
    type: "interaction",
    prototype: "slash",
    code: `$setvar[commands;$sum[$getvar[commands];1]]
$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]
$interactionReply[{newEmbed:{title:Магазин скинов Буба}{thumbnail:$userAvatar}{description:Выберите скин из списка ниже, чтобы посмотреть превью и цену}{color:$getvar[color]}}{actionRow:{selectMenu:skinshop_$authorid: Выберите скин:1:1: false:
{stringInput:Зимний Буб — 20.000:one}:
{stringInput:Дракон Буб — 35.000:two}:
{stringInput:Болотный Буб — 50.000:theee}:
{stringInput:Буб с дамами — 100.000:four}:
{stringInput:Буб с гетто — 150.000:five}}}]
$onlyif[$getglobaluservar[blacklist]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:$getvar[color_error]}}{ephemeral}{interaction}]`
},
{
    name: "skins-select",
    type: "interaction",
    prototype: "selectMenu",
    code: `
        $interactionReply[{newEmbed:{title:Скин: $get[skinName]}{description:Цена: **$get[skinPrice]**$getvar[wallet]}{image:$get[skinImage]}{color:$getvar[color]}}{actionRow:{button:Купить:2:skinbuy_$get[skin]_$authorid:false}{button:Назад:4:skinback_$authorid:false}}]
        $let[skinImage;$splitText[3]]
        $let[skinPrice;$splitText[2]]
        $let[skinName;$splitText[1]]

$textSplit[$if[$get[skin]==1;Зимний Буб,20000,https://media.discordapp.net/attachments/839587792786161664/964163003874422794/2022-04-14-16-56-20.jpg;$if[$get[skin]==2;Дракон Буб,35000,https://media.discordapp.net/attachments/839587792786161664/951836635551637514/IMG_20220311_093636.jpg;$if[$get[skin]==3;Болотный Буб,50000,https://media.discordapp.net/attachments/937714691105517619/937715867171557396/PicsArt_01-31-05.23.15.jpg;$if[$get[skin]==4;Буб с дамами,100000,https://media.discordapp.net/attachments/838794366423662672/937916298254499850/DqHvdW7.jpg;Буб с гетто,150000,https://media.discordapp.net/attachments/838794366423662672/937916757602074624/TItC7rv.jpg]]]];,]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Не вы вызвали данную команду}{color:$getvar[color_error]}}{ephemeral}{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==skinshop;]

$let[skin;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$get[skin1];one;1];two;2];theee;3];four;4];five;5]]
      $let[skin1;$interactionData[data.values[0]]]
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
        $onlyif[$getuservar[скин_$get[skin]]==;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас уже приобретён данный скин}{color:$getvar[color_error]}}{ephemeral}{interaction}]
        $onlyif[$getuservar[korm]>=$get[skinPrice];{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас на балансе слишком мало средств}{color:$getvar[color_error]}}{ephemeral}{interaction}]
        $let[skinImage;$splitText[3]]
        $let[skinPrice;$splitText[2]]
        $let[skinName;$splitText[1]]
        $textSplit[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$get[skin];1;Зимний Буб,20000,https://media.discordapp.net/attachments/839587792786161664/964163003874422794/2022-04-14-16-56-20.jpg];2;Дракон Буб,35000,https://media.discordapp.net/attachments/839587792786161664/951836635551637514/IMG_20220311_093636.jpg];3;Болотный Буб,50000,https://media.discordapp.net/attachments/937714691105517619/937715867171557396/PicsArt_01-31-05.23.15.jpg];4;Буб с дамами,100000,https://media.discordapp.net/attachments/838794366423662672/937916298254499850/DqHvdW7.jpg];5;Буб с гетто,150000,https://media.discordapp.net/attachments/838794366423662672/937916757602074624/TItC7rv.jpg];,]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Не вы вызвали данную команду}{color:$getvar[color_error]}}{ephemeral}{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==skinbuy;]
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
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==skinback;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Не вы вызвали данную команду}{color:$getvar[color_error]}}{ephemeral}{interaction}]
    `
}];