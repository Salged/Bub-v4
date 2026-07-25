module.exports = [{
name: "5️⃣",
type: "interaction",
prototype: "button",
code: `$interactionReply[{newEmbed:{title:Скин #5️⃣}{color:$getvar[color]}{image:https://media.discordapp.net/attachments/838794366423662672/937916757602074624/TItC7rv.jpg}}{actionRow:{button:Купить скин:2:гетто}};;;true]

$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]`
}, {
name: "гетто",
type: "interaction",
prototype: "button",
code: `$setuservar[img;https://media.discordapp.net/attachments/838794366423662672/937916757602074624/TItC7rv.jpg]
$setuservar[скин_5;https://media.discordapp.net/attachments/838794366423662672/937916757602074624/TItC7rv.jpg]

$interactionReply[Поздравляю вас с покупкой скина **#5️⃣**]
$setuservar[korm;$sub[$getuservar[korm];150000]]
$onlyif[$getuservar[скин_5]==;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас уже приобретён данный скин}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$getuservar[korm]>=150000;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас на балансе слишком мало средств}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
`
}]
