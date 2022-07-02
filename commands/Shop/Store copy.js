module.exports = ({
name: "store",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $servername | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]


$interactionReply[;{newEmbed:{title: Магазин сервера $serverName}{description:1. $replacetext[<@&$getservervar[роль_1]>;<@&none>;Отсутствует] — $replacetext[$getservervar[цена_1];none;0]$getvar[wallet] \n2. $replacetext[<@&$getservervar[роль_2]>;<@&none>;Отсутствует] — $replacetext[$getservervar[цена_2];none;0]$getvar[wallet] \n3. $replacetext[<@&$getservervar[роль_3]>;<@&none>;Отсутствует] — $replacetext[$getservervar[цена_3];none;0]$getvar[wallet] \n4. $replacetext[<@&$getservervar[роль_4]>;<@&none>;Отсутствует] — $replacetext[$getservervar[цена_4];none;0]$getvar[wallet] \n5. $replacetext[<@&$getservervar[роль_5]>;<@&none>;Отсутствует] — $replacetext[$getservervar[цена_5];none;0]$getvar[wallet] \n6. $replacetext[<@&$getservervar[роль_6]>;<@&none>;Отсутствует] — $replacetext[$getservervar[цена_6];none;0]$getvar[wallet] \n7. $replacetext[<@&$getservervar[роль_7]>;<@&none>;Отсутствует] — $replacetext[$getservervar[цена_7];none;0]$getvar[wallet] \n8. $replacetext[<@&$getservervar[роль_8]>;<@&none>;Отсутствует] — $replacetext[$getservervar[цена_8];none;0]$getvar[wallet] \n9. $replacetext[<@&$getservervar[роль_9]>;<@&none>;Отсутствует] — $replacetext[$getservervar[цена_9];none;0]$getvar[wallet] \n10. $replacetext[<@&$getservervar[роль_10]>;<@&none>;Отсутствует] — $replacetext[$getservervar[цена_10];none;0]$getvar[wallet]}}]
$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

`
    })
