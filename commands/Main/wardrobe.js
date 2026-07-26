module.exports = ({
name: "wardrobe",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]
$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildid  \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]

$interactionReply[{newEmbed:{title:Ваш шкаф одежды на Буба}{thumbnail:$userAvatar}{field:Выберите нужный вам скин:1️⃣ — Зимний Буб
2️⃣ — Дракон Буб
3️⃣ — Болотный Буб
4️⃣ — Буб с дамами
5️⃣ — Буб с гетто}{color:$getvar[color]}}{actionRow:{button:1️⃣:2:1️⃣1️⃣}{button:2️⃣:2:2️⃣2️⃣}{button:3️⃣:2:3️⃣3️⃣}{button:4️⃣:2:4️⃣4️⃣}{button:5️⃣:2:5️⃣5️⃣}}]

$onlyif[$getglobaluservar[blacklist]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:$getvar[color_error]}}{interaction}{ephemeral}]`
})
