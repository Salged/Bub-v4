module.exports = ({
name: "walk",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]
$channelsendmessage[$getvar[logchannel];$guildid {newEmbed:{title: Использована новая команда}{description:**Сервер:** $servername  \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]
$interactionReply[;{newEmbed:{title: Прогулка}{color:$getvar[color}{description:Вы погуляли с $getuservar[name] и повысили настроение! (+$random[15;30]xp)}{image:$randomText[https://i.imgur.com/HEkXJsB.jpg;https://i.imgur.com/4D8jqpM.jpg]}}]
$setuservar[xp;$sum[$getuservar[xp];$random[15;30]]]
$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]`
})
