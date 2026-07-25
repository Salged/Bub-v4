module.exports = {
name: "readyc",
type: "readyCommand",
channel: "$getvar[logchannel]",
code: `
Загружен за       : $numberSeparator[$divide[$sub[$dateStamp;$get[time]];10]]s 
____________________________________________
<@$clientID> включился в <t:$cropText[$dateStamp;10]:F>

$djsEval[global.aoi = 

(e, code, rc = true, re = true, sm = true) => e.interpreter(e.client, e.message, e.args, { name: 'Eval', code: code }, e.client.db, rc, undefined, {}, undefined, undefined, re, false, sm)]
$let[time;$datestamp]
$suppressErrors`})
}
