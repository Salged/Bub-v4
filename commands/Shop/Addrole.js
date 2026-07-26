module.exports = ({
name: "add_role",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]

 $djsEval[
            let shop = JSON.parse($getServerVar[shop] || '[]');
            shop.push({ id: '$get[roleId]', price: Number('$get[price]') });
            $setServerVar[shop; JSON.stringify(shop)];
            return '';
        ]
        
$interactionReply[;{newEmbed:{title: Добавление роли в магазин}{description:Вы добавили роль <@&$get[roleId]> ценой $get[price]$getvar[wallet] на слот $interactionData[options.data[0].value]}{color:$getglobaluservar[color]}}]

$onlyif[$interactionData[options.data[2].value]<500001;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Максимальная цена роли \`500.000\`$getvar[wallet]}{color:$getvar[color_error]}}{ephemeral}{interaction}]
$onlyif[$interactionData[options.data[2].value]>=1000;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Минимальная цена роли \`1.000\`$getvar[wallet]}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$roleposition[$highestrole[$clientid]]<$roleposition[$interactionData[options.data[1].value]];{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Указанная роль выше роли бота}{color:$getvar[color_error]}}{ephemeral}{interaction}]
   
$onlyif[$ismanagedrole[$findrole[$get[roleid]]]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Роль интеграции нельзя добавлять в магазин}{color:$getvar[color_error]}}{ephemeral}{interaction}]


$onlyif[$get[id]<11;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Максимально 10 слотов в магазине!}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$get[id]>=1;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите слот от 1 до 10 включительно}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$isnumber[$get[id]]==true;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Укажите номер слота!}{color:$getvar[color_error]}}{ephemeral}{interaction}]
$let[id;$interactionData[options.data[0].value]]
$let[roleId;$interactionData[options.data[1].value]]
$let[price;$interactionData[options.data[2].value]]
        
$onlyperms[manageserver;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы не можете управлять сервером}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]



$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

`

}) 

