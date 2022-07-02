module.exports = ({
name: "bub",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]
$channelsendmessage[$getvar[logchannel];$guildid {newEmbed:{title: Использована новая команда}{description:**Сервер:** $servername  \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]
$interactionReply[;{newEmbed:{title:Профиль $username[$get[id]]}{thumbnail:$userAvatar[$get[id]]}{description:❤️ ・ Имя: **$getUserVar[name;$get[id]]**
$getVar[wallet] ・ Бубкойны: **$numberSeparator[$getUserVar[korm;$get[id]];.]**
🌈 ・ Настроение: **$replaceText[$replaceText[$checkCondition[$getUserVar[md;$get[id]]<150];true;Плохое];false;Хорошее]** ($getuservar[md]/150)
🛡️ ・ Уровень: **$numberSeparator[$getUserVar[lvl;$get[id]];.]**
⚗️ ・ Xp: **$numberSeparator[$getUserVar[xp;$get[id]];.]/$numberSeparator[$getUserVar[sledxp;$get[id]];.]**}{color:$getvar[color]}{image:$getuservar[img]}}]
$let[id;$replacetext[$interactiondata[options.data[0].value];undefined;$authorid]]
$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]`
})
