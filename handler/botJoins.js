module.exports = (bot) => { 
bot.guildJoinCommand({
channel: "$getvar[servers]",
    code: `$title[1;Бота добавили на новый сервер] $description[1;Сервер: $servername | $guildid
Владелец: $usertag[$ownerid]
Пользователей: $memberscount] $color[1;GREEN]
$onlyif[$getservervar[blacklist_server]==false;{execute:bot_leave}]` });
bot.awaitedCommand({
name: "bot_leave",
code: `$botLeave`
})
bot.guildLeaveCommand({
    channel: "$getvar[servers]",
    code: `$title[1;Бота убрали с сервера] $description[1;Сервер: $servername | $guildid
Владелец: $usertag[$ownerid]
Пользователей: $memberscount] $color[1;RED]`    })
}
