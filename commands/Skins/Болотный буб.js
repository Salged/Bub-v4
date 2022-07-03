module.exports = [({
name: "3️⃣",
type: "interaction",
prototype: "button",
code: `$interactionReply[;{newEmbed:{title:Скин #3️⃣}{color:$getvar[color]}{image:https://media.discordapp.net/attachments/937714691105517619/937715867171557396/PicsArt_01-31-05.23.15.jpg}};{actionRow:{button:Купить скин:2:болото}};;;true]
$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]`
}), ({
name: "болото",
type: "interaction",
prototype: "button",
code: `$setuservar[img;https://media.discordapp.net/attachments/937714691105517619/937715867171557396/PicsArt_01-31-05.23.15.jpg]
$setuservar[скин_3;https://media.discordapp.net/attachments/937714691105517619/937715867171557396/PicsArt_01-31-05.23.15.jpg]
$interactionReply[Поздравляю вас с покупкой скина **#3️⃣**]
$setuservar[korm;$sub[$getuservar[korm];50000]]
$onlyif[$getuservar[скин_3]==;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас уже приобретён данный скин}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
$onlyif[$getuservar[korm]>=50000;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас на балансе слишком мало средств}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
`
})]
