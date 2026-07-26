module.exports = ({
name: "chest",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]

$interactionReply[Вы передали <@$get[user]> \`$replacetext[$replacetext[$replacetext[$interactionData[options.data[0].options[1].value];1;Обычный];2;Редкий];3;Эпический]\` сундук $customemoji[q_chest_$get[chest]]

$setuservar[chest_$get[chest];$sub[$getuservar[chest_$get[chest];1]]
$setuservar[chest_$get[chest];$sum[$getuservar[chest_$get[chest];$get[user]];1];$get[user]]

$onlyif[$getuservar[chest_$get[chest]]>=1;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас нет сундуков данного типа}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$get[user]!=$interactiondata[author.id];{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Нельзя передавать сундуки самому себе}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$memberexists[$get[user]]==true;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Пользователя нет на сервере}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$let[chest;$interactionData[options.data[0].options[1].value]]
$let[user;$interactionData[options.data[0].options[0].value]]

$onlyif[$getglobaluservar[blacklist]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$interactionData[options._subcommand]==transfer;]`

})