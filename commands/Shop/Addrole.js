module.exports = [{
    name: "add_role",
    type: "interaction",
    prototype: "slash",
    code: `$setvar[commands;$sum[$getvar[commands];1]]
$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]

$setguildvar[shop;$get[newShop]]
$interactionReply[{newEmbed:{title: Добавление роли в магазин}{description:Вы добавили роль <@&$get[roleId]> ценой $get[price]$getvar[wallet] в магазин}{color:$getvar[color]}}]

$let[newShop;$if[$get[currentShop]==;$get[roleId]:$get[price];$get[currentShop],$get[roleId]:$get[price]]]

$onlyif[$checkContains[,$get[currentShop],;,$get[roleId]:]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Эта роль уже есть в магазине}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$get[shopCount]<25;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Максимально 25 ролей в магазине (ограничение select menu)}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$let[shopCount;$if[$get[currentShop]==;0;$sum[$charCount[$get[currentShop];,];1]]]
$let[currentShop;$getguildvar[shop]]

$onlyif[$get[price]<500001;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Максимальная цена роли \`500.000\`$getvar[wallet]}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$get[price]>=1000;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Минимальная цена роли \`1.000\`$getvar[wallet]}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$roleposition[$userhighestrole[$clientid]]<$roleposition[$get[roleId]];{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Указанная роль выше роли бота}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$isrolemanaged[$findrole[$get[roleId]]]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Роль интеграции нельзя добавлять в магазин}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$let[roleId;$interactionData[options.data[1].value]]
$let[price;$interactionData[options.data[2].value]]

$onlyperms[manageguild;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы не можете управлять сервером}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$getglobaluservar[blacklist]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:$getvar[color_error]}}{ephemeral}{interaction}]
`
}];
