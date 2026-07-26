module.exports = ({
name: "skins",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];$guildid {newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildnid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]

$interactionReply[{newEmbed:{title:Магазин скинов Буба}{thumbnail:$userAvatar}{field:Выберите интересующий вас скин:1️⃣ — Зимний Буб, 20.000$getvar[wallet]
2️⃣ — Дракон Буб, 35.000$getvar[wallet]
3️⃣ — Болотный Буб, 50.000$getvar[wallet]
4️⃣ — Буб с дамами, 100.000$getvar[wallet]
5️⃣ — Буб с гетто, 150.000$getvar[wallet]}{color:$getvar[color]}}{actionRow:{button:1️⃣:2:1️⃣}{button:2️⃣:2:2️⃣}{button:3️⃣:2:3️⃣}{button:4️⃣:2:4️⃣}{button:5️⃣:2:5️⃣}}]

$onlyif[$getglobaluservar[blacklist]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:$getvar[color_error]}}{ephemeral}{interaction}]
`
})
