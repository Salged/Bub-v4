module.exports = [{
    name: "store",
    type: "interaction",
    prototype: "slash",
    code: `$setvar[commands;$sum[$getvar[commands];1]]
$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]

$interactionReply[{newEmbed:{title: Магазин сервера $serverName}{description:$get[shopText]}{color:$getvar[color]}}]

$let[shopText;$if[$get[shop]==;Магазин пуст.;$get[shopLines]]]

$let[shopLines;$textSplitMap[shop_line]]
$textSplit[$get[shop];,]
$let[shop;$getguildvar[shop]]

$onlyif[$getglobaluservar[blacklist]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:$getvar[color_error]}}{ephemeral}{interaction}]`
}];