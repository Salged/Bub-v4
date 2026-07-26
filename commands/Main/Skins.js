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
        $let[skinImage;$getObjectProperty[skin_images;$get[skin]]]
        $let[skinPrice;$getObjectProperty[skin_prices;$get[skin]]]
        $let[skinName;$getObjectProperty[skin_names;$get[skin]]]
        $createObject[skin_images;{"1":"https://media.discordapp.net/attachments/839587792786161664/964163003874422794/2022-04-14-16-56-20.jpg","2":"https://media.discordapp.net/attachments/839587792786161664/951836635551637514/IMG_20220311_093636.jpg","3":"https://media.discordapp.net/attachments/937714691105517619/937715867171557396/PicsArt_01-31-05.23.15.jpg","4":"https://media.discordapp.net/attachments/838794366423662672/937916298254499850/DqHvdW7.jpg","5":"https://media.discordapp.net/attachments/838794366423662672/937916757602074624/TItC7rv.jpg"}]
        $createObject[skin_prices;{"1":"20000","2":"35000","3":"50000","4":"100000","5":"150000"}]
        $createObject[skin_names;{"1":"Зимний Буб","2":"Дракон Буб","3":"Болотный Буб","4":"Буб с дамами","5":"Буб с гетто"}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Не вы вызвали данную команду}{color:$getvar[color_error]}}{ephemeral}{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==skinshop;]
        $let[skin;$interactionData[data.values[0]]]
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
        $let[skinImage;$getObjectProperty[skin_images;$get[skin]]]
        $let[skinPrice;$getObjectProperty[skin_prices;$get[skin]]]
        $let[skinName;$getObjectProperty[skin_names;$get[skin]]]
        $createObject[skin_images;{"1":"https://media.discordapp.net/attachments/839587792786161664/964163003874422794/2022-04-14-16-56-20.jpg","2":"https://media.discordapp.net/attachments/839587792786161664/951836635551637514/IMG_20220311_093636.jpg","3":"https://media.discordapp.net/attachments/937714691105517619/937715867171557396/PicsArt_01-31-05.23.15.jpg","4":"https://media.discordapp.net/attachments/838794366423662672/937916298254499850/DqHvdW7.jpg","5":"https://media.discordapp.net/attachments/838794366423662672/937916757602074624/TItC7rv.jpg"}]
        $createObject[skin_prices;{"1":"20000","2":"35000","3":"50000","4":"100000","5":"150000"}]
        $createObject[skin_names;{"1":"Зимний Буб","2":"Дракон Буб","3":"Болотный Буб","4":"Буб с дамами","5":"Буб с гетто"}]
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