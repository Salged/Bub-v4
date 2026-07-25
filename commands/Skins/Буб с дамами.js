module.exports = [{
name: "4️⃣",
type: "interaction",
prototype: "button",
code: `$interactionReply[{newEmbed:{title:Скин #4️⃣}{color:$getvar[color]}{image:https://media.discordapp.net/attachments/838794366423662672/937916298254499850/DqHvdW7.jpg}}{actionRow:{button:Купить скин:2:дамы}};;;true]

$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]`
}, {
name: "дамы",
type: "interaction",
prototype: "button",
code: `$setuservar[img;https://media.discordapp.net/attachments/838794366423662672/937916298254499850/DqHvdW7.jpg]
$setuservar[скин_4;https://media.discordapp.net/attachments/838794366423662672/937916298254499850/DqHvdW7.jpg]

$interactionReply[Поздравляю вас с покупкой скина **#4️⃣**]
$setuservar[korm;$sub[$getuservar[korm];100000]]
$onlyif[$getuservar[скин_4]==;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас уже приобретён данный скин}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$getuservar[korm]>=100000;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас на балансе слишком мало средств}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
`
}]
