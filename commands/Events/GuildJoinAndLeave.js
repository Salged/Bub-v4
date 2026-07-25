module.exports = [{ 
name: "guildjoin",
channel: "$getvar[servers]",
type: "guildJoin",
code: `$title[1;Бота добавили на новый сервер] $description[1;Сервер: $guildname | $guildid
Владелец: $usertag[$ownerid]
Пользователей: $memberscount] 
$color[1;GREEN]
$onlyif[$getservervar[blacklist_server]==false;{execute:bot_leave}]` },
{
type: "awaited",
name: "bot_leave",
code: `$clientLeave[$guildid]`
},
{
    name: "guildLeave",
    channel: "$getvar[servers]",
     type: "guildLeave",
    code: `$title[1;Бота убрали с сервера] $description[1;Сервер: $servername | $guildid
Владелец: $usertag[$ownerid]
Пользователей: $memberscount] $color[1;RED]`
}]
