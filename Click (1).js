module.exports = [({
    name: "clicker",
    type: "interaction",
    prototype: "slash",
    code: `
$interactionReply[;{newEmbed:{title:Меню кликера}{description: Выберите нужное вам взаимодействие}{color:$getglobaluservar[color]}};{actionRow:{selectMenu:кликер:Меню кликера:1:1:true:{selectMenuOptions:Ваш профиль:профиль:Просмотр вашего профиля::<:q_click:982012461970509884>}{selectMenuOptions:Таблица лидеров:лидеры:Лидеры по кликам::<:q_click:982012461970509884>}{selectMenuOptions:Кликер:кликер: Собственно сам кликер::<:q_click:982012461970509884>}}}]
$setvar[commands;$sum[$getvar[commands];1]]

$channelsendmessage[$getvar[logchannel];{newEmbed:{title: Использована новая команда}{description:**Сервер:** $servername | $guildid \n**Пользователь:** $usertag | $authorid \n**Команда:** $commandname}}]
$onlyif[$getglobaluservar[blacklist]==false;{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description:Вы заблокированы, обратитесь на [сервер поддержки]($getvar[invite]) для оказания вам помощи}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]`
    }), ({ 
    name: "кликер",
    type: "interaction",
    prototype: "selectMenu",
    code: `$interactionReply[;{newEmbed:{title: Статистика кликов}{description:**Ваши клики:** $getuservar[userclick] \n**Все ваши клики:** $getglobaluservar[globaluserclick] \n**Кликов на сервере:** $getservervar[serverclick] \n**Всего кликов:** $getvar[globalclick]}{color:$getglobaluservar[color]}{footer:$usertag:$userAvatar}}]



$onlyif[$interactionData[values[0]]==профиль;]
`
    }), ({
    name: "кликер",
    type: "interaction",
    prototype: "selectMenu",
    code: `$interactionReply[Нажимай на кнопку;;{actionRow:{button:Клик:1:клик_$authorid:false:<:q_click:982012461970509884>}}]


$onlyif[$interactionData[values[0]]==кликер;]`
    }), ({
   
    type: "interaction",
    prototype: "button",
    code: `
$interactionUpdate[Кликов: $getuservar[userclick];;{actionRow:{button:Клик:1:клик_$authorid:false:<:q_click:982012461970509884>}}]

$setservervar[serverclick;$sum[$getservervar[serverclick];1]]
$setglobaluservar[globaluserclick;$sum[$getglobaluservar[globaluserclick];1]]
$setvar[globalclick;$sum[$getvar[globalclick];1]]
$setuservar[userclick;$sum[$getuservar[userclick];1]]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds": "{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title: Произошла ошибка!}{description: Не вы вызвали данную команду}{color:RED}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==клик;]
`
    }), ({
    name: "кликер",
    type: "interaction",
    prototype: "selectMenu",
    code: `$interactionReply[;{newEmbed:{title:Таблица лидеров сервера}{description:$replacetext[$replacetext[$replacetext[$userLeaderboard[$guildid;userclick;asc;{top} - {username}: {value}<:q_click:982012461970509884>];1 -;🥇 -;1];2 -;🥈 -;1];3 -;🥉 -;1]}{color:$getglobaluservar[color]}}{newEmbed:{title: Глобальная таблица лидеров}{description:$replacetext[$replacetext[$replacetext[$globaluserLeaderboard[globaluserclick;asc;{top} - {username}: {value}<:q_click:982012461970509884>];1 -;🥇 -;1];2 -;🥈 -;1];3 -;🥉 -;1]}{color:$getglobaluservar[color]}}]




$onlyif[$interactionData[values[0]]==лидеры;]`
    
    })]