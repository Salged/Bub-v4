module.exports = ({
name: "1️⃣1️⃣",
type: "interaction",
prototype: "button",
code: `$setuservar[img;$getuservar[скин_1]]
$interactionReply[;{newEmbed:{title:Вы успешно одели скин #1️⃣}{image:$getuservar[скин_1]}{color:$getvar[color]}}]
$onlyif[$getuservar[скин_1]!=;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас не куплен данный скин}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]`
})
