module.exports = ({
  name: "linux",
aliases: "exec",
code: `
$sendMessage[{newEmbed:{title:$randomText[It's really safe?; Well...;Hmmmm :);Linux]}
{field:📥 Ввод:\`\`\`js
$message
\`\`\`} {field:📤 Вывод:\`\`\`js
$exec[$message]
\`\`\`} {color:$getGlobalUserVar[color]}};no]
$suppressErrors[{error}]
 $onlyif[$authorID==920735973694902312;У вас нет прав]`
})
