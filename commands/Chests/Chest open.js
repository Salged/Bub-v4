module.exports = ({
name: "chest",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]
$interactionReply[Вы открыли \`$replacetext[$replacetext[$replacetext[$interactionData[options.data[0].options[0].value];1;Обычный];2;Редкий];3;Эпический]\` сундук, и вам выпало $multi[$interactionData[options.data[0].options[0].value];$random[2000;4000]]$getvar[wallet] и $multi[$interactionData[options.data[0].options[0].value];$random[10;20]]⚗️]
$setuservar[xp;$sum[$getuservar[xp];$multi[$interactionData[options.data[0].options[0].value];$random[10;20]]]]
$setuservar[korm;$sum[$getuservar[korm];$multi[$interactionData[options.data[0].options[0].value];$random[2000;4000]]]]
$setuservar[chest_$interactionData[options.data[0].options[0].value];$sub[$getuservar[chest_$interactionData[options.data[0].options[0].value]];1]]

$onlyif[$getuservar[chest_$interactionData[options.data[0].options[0].value]]>=1;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас нет сундуков данного типа }{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$getglobaluservar[blacklist]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:$getvar[color_error]}}{ephemeral}{interaction}]
$onlyif[$interactionData[options._subcommand]==open;]`

})
