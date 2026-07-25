module.exports = {
name: "error",
type: "functionError",
channel: "838794366423662672",
code: `
$setvar[commandsError;$sum[$getvar[commandsError];1]]

$channelSendMessage[838794366423662672;<@$clientownerids>
$guildid {newEmbed:{title:Была обнаружена ошибка!}{color:RED}{description:Команда которую использовали при ошибке - \`$handlEerror[command]\`
Сервер — $serverName
Функция в которой есть ошибка - \`$handleerror[function]\`
Ошибка - $handleError[error]
}}]`
}

