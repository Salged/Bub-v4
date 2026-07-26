module.exports = ({
name: "wardrobe",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]
$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildid  \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]

$interactionReply[Выберите скин из списка ниже{actionRow:{selectMenu:wardrobe_select: Выберите скин:1:1: false:
{stringInput:Зимний Буб:1}:
{stringInput:Дракон Буб:2}:
{stringInput:Болотный Буб:3}:
{stringInput:Буб с дамами:4}:
{stringInput:Буб гетто:5}}}]

$onlyif[$getglobaluservar[blacklist]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:$getvar[color_error]}}{interaction}{ephemeral}]`
})
