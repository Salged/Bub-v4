module.exports = [{
name: "wardrobe",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]
$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildid  \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]

$interactionReply[Выберите скин из списка ниже{actionRow:{selectMenu:wardrobe_$authorid: Выберите скин:1:1: false:
{stringInput:Зимний Буб:1}:
{stringInput:Дракон Буб:2}:
{stringInput:Болотный Буб:3}:
{stringInput:Буб с дамами:4}:
{stringInput:Буб гетто:5}}}]

$onlyif[$getglobaluservar[blacklist]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:$getvar[color_error]}}{interaction}{ephemeral}]`
},
                  {
    name: "wardrobe_select",
    type: "interaction",
    prototype: "selectMenu",
    code: `
        $interactionReply[{newEmbed:{title:Скин надет!}{description:Теперь вы в скине **$get[skinName]**}{image:$get[skinUrl]}{color:$getvar[color]}}]

        $setuservar[img;$get[skinUrl]]

        $onlyif[$get[currentSkin]!=$get[skinUrl];{newEmbed:{title:ℹ️ Информация}{description:Вы уже используете этот скин!}{color:$getvar[color]}}{ephemeral}{interaction}]

        $onlyif[$get[skinUrl]!=;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title:Произошла ошибка!}{description:У вас нет этого скина!}{color:$getvar[color_error]}}{ephemeral}{interaction}]

        $let[skinUrl;$getuservar[скин_$get[skin]]]
        $let[currentSkin;$getuservar[img]]
        $let[skinName;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$get[skin];1;Зимний Буб];2;Дракон Буб];3;Болотный Буб];4;Буб с дамами];5;Буб с гетто]]
        $let[skin;$interactionData[values[0]]]
    `
}];
