module.exports = ({
    name: "wardrobe_select",
    type: "interaction",
    prototype: "selectMenu",
    code: `
        // === 1. ОТВЕТ (самый верх) ===
        $interactionReply[{newEmbed:{title:Скин надет!}{description:Теперь вы в скине **$get[skinName]**}{image:$get[skinUrl]}{color:$getvar[color]}}]

        // === 2. МЕНЯЕМ АКТИВНЫЙ СКИН ===
        $setuservar[img;$get[skinUrl]]

        // === 3. ПРОВЕРКА: не выбран ли уже этот скин ===
        $onlyif[$get[currentSkin]!=$get[skinUrl];{newEmbed:{title:ℹ️ Информация}{description:Вы уже используете этот скин!}{color:$getvar[color]}}{ephemeral}{interaction}]

        // === 4. ПРОВЕРКА: есть ли скин у пользователя ===
        $onlyif[$get[skinUrl]!=;{newEmbed:{thumbnail:https://cdn.discordapp.com/emojis/606562703917449226.gif?v=1&size=4096}{title:Произошла ошибка!}{description:У вас нет этого скина!}{color:$getvar[color_error]}}{ephemeral}{interaction}]

        // === 5. ПЕРЕМЕННЫЕ (самый низ) ===
        $let[skin;$interactionData[data.values[0]]]
        $let[skinUrl;$getuservar[скин_$get[skin]]]
        $let[currentSkin;$getuservar[img]]
        $let[skinName;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$get[skin];1;Зимний Буб];2;Дракон Буб];3;Болотный Буб];4;Буб с дамами];5;Буб с гетто]]
    `
});
