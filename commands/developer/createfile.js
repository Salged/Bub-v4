module.exports = {
name: "file",
code: `
$createfile[$commandinfo[$message;code];$commandinfo[$message;name].txt]
$author[1;File found;$getServerVar[suca]]
$color[1;$getglobaluserVar[color]]
$description[1;
\`\`\`js
$commandinfo[$message;code]\`\`\`]
$onlyif[$charCount[$message]>0;$getServerVar[error] **Correct usage:** \`\`\`js
$tolowercase[$commandname] < file name >\`\`\`]
 $onlyif[$authorID==920735973694902312;У вас нет прав]`}
