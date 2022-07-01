module.exports = [({
name: "1️⃣",
type: "interaction",
prototype: "button",
code: `$interactionReply[;{newEmbed:{title:Скин #$interactionData[customID]}{color:$getvar[color]}{image:https://media.discordapp.net/attachments/839587792786161664/964163003874422794/2022-04-14-16-56-20.jpg}};{actionRow:{button:Купить скин:2:зимний}};;;true]
$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]`
}), ({
name: "зимний",
type: "interaction",
prototype: "button",
code: `$setuservar[img;https://media.discordapp.net/attachments/839587792786161664/964163003874422794/2022-04-14-16-56-20.jpg]
$setuservar[скин_1;https://media.discordapp.net/attachments/839587792786161664/964163003874422794/2022-04-14-16-56-20.jpg]
$interactionReply[Поздравляю вас с покупкой скина **#**]
$onlyif[$getuservar[korm]>=20000;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас на балансе слишком мало средств}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]
`
})]
