module.exports = ({
name: "rank",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]
$channelsendmessage[$getvar[logchannel];$guildid {newEmbed:{title: Использована новая команда}{description:**Сервер:** $servername  \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]
$interactionReply[;{newEmbed:{title:Карточка $usertag[$get[id]]}{image:https://vacefron.nl/api/rankcard?username=$replaceText[$username[$get[id]]; ;+]&avatar=$userAvatar[$get[id]]?size=4096&level=$getUserVar[lvl;$get[id]]&rank=&currentxp=$getUserVar[xp;$get[id]]&nextlevelxp=$getUserVar[sledxp;$get[id]]&previouslevelxp=0&custombg=https://i.imgur.com/EBPIwMZ.jpeg&xpcolor=$getvar[color]&isboosting=$isBoosting[$get[id]]}{color:$getvar[color]}}]
$let[id;$replacetext[$interactiondata[options.data[0].value];undefined;$authorid]]
$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]`
})
