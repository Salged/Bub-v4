module.exports = (bot) => { bot.guildJoinCommand({
//command
channel: "$getvar[servers]",
    code: `$title[1;Бота добавили на новый сервер] $description[1;Сервер: $servername | $guildid
Владелец: $usertag[$ownerid]
Пользователей: $memberscount] $color[1;GREEN]` });
bot.guildLeaveCommand({
    channel: "$getvar[servers]",
    code: `$title[1;Бота убрали с сервера] $description[1;Сервер: $servername | $guildid
Владелец: $usertag[$ownerid]
Пользователей: $memberscount] $color[1;RED]`    })
}
