module.exports = (bot) => {
bot.readyCommand({
channel: "$getvar[logchannel]",
code: `
YouTube    : $replaceText[$replaceText[$isValidLink[https://youtube.com/];true;✅];false;❌]
SoundCloud : $replaceText[$replaceText[$isValidLink[https://soundcloud.com/];true;✅];false;❌]
Spotify    : $replaceText[$replaceText[$isValidLink[https://spotify.com/];true;✅];false;❌]
____________________________________________
Загружен за       : $numberSeparator[$divide[$sub[$dateStamp;$get[time]];10]]s 
____________________________________________
<@$clientID> включился в <t:$cropText[$dateStamp;10]:F>

$djsEval[global.aoi = 

(e, code, rc = true, re = true, sm = true) => e.interpreter(e.client, e.message, e.args, { name: 'Eval', code: code }, e.client.db, rc, undefined, {}, undefined, undefined, re, false, sm)]
$let[time;$datestamp]
$suppressErrors`})
bot.readyCommand({
channel: "",
code: `$setvar[builds;$sum[$getvar[builds];1]]
$setvar[botvers;$sum[$getvar[botvers];1]]
`
}) 
}
