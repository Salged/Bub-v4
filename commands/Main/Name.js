module.exports = ({
name: "name",
type: "interaction",
prototype: "slash",
code: `$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];$guildid {newEmbed:{title: Использована новая команда}{description:**Сервер:** $guildname $guildid  \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]

$setuservar[name;$replacetext[$interactiondata[options.data[0].value];*;]]

$interactionReply[Хорошо, теперь это — **$replacetext[$interactiondata[options.data[0].value];*;]** <:bubkrytoi:838837227609522226>]

$onlyif[$charCount[$interactiondata[options.data[0].value]]<33;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Нельзя указать более 32 символов в нике, сейчас их \`$charCount[$interactiondata[options.data[0].value]]\`}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$getuservar[name]!=$interactiondata[options.data[0].value];{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:У вас уже указан данный ник}{color:$getvar[color_error]}}{ephemeral}{interaction}]

$onlyif[$getglobaluservar[blacklist]==false;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:$getvar[color_error]}}{ephemeral}{interaction}]
`
})
