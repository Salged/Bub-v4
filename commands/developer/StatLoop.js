module.exports =  {
type: "loop",
channel: "975806804716032020",
code: `
$editMessage[991407327838220320;
{newEmbed:{author: Статистика бота:$useravatar[$clientid]}
{description: **RAM:** $ram MB / $maxRam MB\n**CPU:** $cpu% / 100%}
{color:$replaceText[$userRoleColor[$clientID];#;]}};975806804716032020]
`,
executeOnStartup: true,
every: 50000
} 
