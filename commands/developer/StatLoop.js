module.exports =  {
type: "loop",
channel: "975806804716032020",
code: `
$editMessage[1530667926242328607;
{newEmbed:{author: Статистика бота:$useravatar[$clientid]}
{description: **RAM:** $ram MB / $maxRam MB\n**Серверов:** $guildCount \n**Пользователей:** $allmemberscount \n**Команд:** $getvar[commands] \n**Из них ошибок:** $getvar[commandsError]}
{color:$getvar[color]}};975806804716032020]
$suppressErrors`,
executeOnStartup: true,
every: 50000
} 
