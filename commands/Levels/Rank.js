module.exports = ({
name: "rank",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]
$channelsendmessage[$getvar[logchannel];$guildid {newEmbed:{title: Использована новая команда}{description:**Сервер:** $servername  \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]
$interactionReply[;{newEmbed:{title:Карточка $usertag[$get[id]]}{image:https://vacefron.nl/api/rankcard?username=$replaceText[$username[$get[id]]; ;+]&avatar=$userAvatar[$get[id]]&level=$getUserVar[lvl;$get[id]]&rank=&currentxp=$getUserVar[xp;$get[id]]&nextlevelxp=$getUserVar[sledxp;$get[id]]&previouslevelxp=0&custombg=https://images-ext-1.discordapp.net/external/5RCjjn-D6AT3fBEKUaMM4JhsJXZetPY4mXEGc9Qrqu4/%3Fixlib%3Drb-1.2.1%26ixid%3DMXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%253D%26w%3D1000%26q%3D80%26avatarurl%3D%24replaceText%5B%24authorAvatar%3Bwebp%3Bpng%5D/https/images.unsplash.com/photo-1579546929662-711aa81148cf&xpcolor=$getvar[color]&isboosting=$isBoosting[$get[id]]}{color:$getvar[color]}}]
$let[id;$replacetext[$interactiondata[options.data[0].value];undefined;$authorid]]
$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]`
})
