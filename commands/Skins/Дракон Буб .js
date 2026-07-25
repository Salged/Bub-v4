module.exports = [{
name: "2️⃣",
type: "interaction",
prototype: "button",
code: `$interactionReply[{newEmbed:{title:Скин #2️⃣}{color:$getvar[color]}{image:https://media.discordapp.net/attachments/839587792786161664/951836635551637514/IMG_20220311_093636.jpg}}{actionRow:{button:Купить скин:2:дракон}};;;true]

$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]`
}, {
name: "дракон",
type: "interaction",
prototype: "button",
code: `$setuservar[img;https://media.discordapp.net/attachments/839587792786161664/951836635551637514/IMG_20220311_093636.jpg]
$setuservar[скин_2;https://media.discordapp.net/attachments/839587792786161664/951836635551637514/IMG_20220311_093636.jpg]

$interactionReply[Поздравляю вас с покупкой скина **#2️⃣**]
$setuservar[korm;$sub[$getuservar[korm];35000]]

$onlyif[$getuservar[скин_2]==;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас уже приобретён данный скин}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$getuservar[korm]>=35000;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас на балансе слишком мало средств}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
`
}]
