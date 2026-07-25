module.exports = ({
name: "chest",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $servername | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]
$interactionReply[Вы передали <@$interactionData[options.data[0].options[0].value]> \`$replacetext[$replacetext[$replacetext[$interactionData[options.data[0].options[1].value];1;Обычный];2;Редкий];3;Эпический]\` сундук]
$setuservar[chest_$interactionData[options.data[0].options[1].value];$sub[$getuservar[chest_$interactionData[options.data[0].options[1].value]];1]]
$setuservar[chest_$interactionData[options.data[0].options[1].value];$sum[$getuservar[chest_$interactionData[options.data[0].options[1].value];$interactionData[options.data[0].options[0].value]];1];$interactionData[options.data[0].options[0].value]]
$onlyif[$getuservar[chest_$interactionData[options.data[0].options[1].value]]>=1;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас нет сундуков данного типа}{color:RED}}, "ephemeral" : true, "options" : { "interaction" : true}]
$onlyif[$memberexists[$interactionData[options.data[0].options[0].value]]==true;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Пользователя нет на сервере}{color:RED}", "ephemeral" : true, "options" : { "interaction" : true}]
$onlyif[$getglobaluservar[blacklist]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}, "ephemeral" : true, "options" : { "interaction" : true}]
$onlyif[$interactionData[options._subcommand]==transfer;]`

})