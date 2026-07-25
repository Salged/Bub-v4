module.exports = ({
name: "help",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];$guildid {newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildid  \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]

$interactionReply[{newEmbed:{author:Команды Буба:$userAvatar[$clientid]}{field:Администраторам:\`add_role, delete_role, upcoin, uncoin\`:no}{field:Основные:\`bub, bot, bank, chest, casino, skins, wardrobe\`:no}{field:Заработок:\`mine, builder, bonus\`:no}{field:Разное:\`walk, leaderboard, name, pay, buy_role, store, rob\`:no}{color:$getvar[color]}}]

$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]`
})
