module.exports = ({
name: "4️⃣4️⃣",
type: "interaction",
prototype: "button",
code: `$setuservar[img;$getuservar[скин_$get[скин]]]
$interactionReply[;{newEmbed:{title:Вы успешно одели скин #4️⃣}{image:$getuservar[скин_$get[скин]]}{color:$getvar[color]}}]
$onlyif[$getuservar[скин_$get[скин]]!=;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас не куплен данный скин}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$let[скин;4]`
})
