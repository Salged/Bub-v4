module.exports = ({
name: "chest",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]

$interactionReply[Вы купили **$interactionData[options.data[0].options[1].value]** $customEmoji[q_chest_$get[p]] за $get[d]$getservervar[wallet]]
$setuservar[chest_$get[p];$sum[$getuservar[chest_$get[p]];$interactionData[options.data[0].options[1].value]]]

$setuservar[korm;$sub[$getuservar[korm];$get[d]]]

$onlyif[$getuservar[korm]>=$get[d];{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас $getuservar[korm]/$get[d]$getservervar[wallet]}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$let[d;$multi[$get[l];$interactionData[options.data[0].options[1].value]]]
$let[l;$multi[$get[p];3000]]


$let[p;$interactionData[options.data[0].options[0].value]]

$onlyif[$getglobaluservar[blacklist]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:$getvar[color_error]}}{ephemeral}{interaction}]
$onlyif[$interactionData[options._subcommand]==buy;]`

})
