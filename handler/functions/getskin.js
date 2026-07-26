module.exports = [{
    name: "getSkin",
    params: [
        { name: "key", type: "String", required: true },
        { name: "property", type: "String", required: true }
    ],
    code: `
// === ВОЗВРАЩАЕМ ===
        $return[$if[$get[result]==;null;$get[result]]]

// === ПОЛУЧАЕМ ЗНАЧЕНИЕ ===
        $let[result;$djsEval[$get[data][$get[key]]?.[$get[property]]]]


        // === ДАННЫЕ (можно вынести в глобальную переменную) ===
        $let[data;$djsEval[
            ({
                1: { name: "Зимний Буб", price: 20000, image: "https://media.discordapp.net/attachments/839587792786161664/964163003874422794/2022-04-14-16-56-20.jpg" },
                2: { name: "Дракон Буб", price: 35000, image: "https://media.discordapp.net/attachments/839587792786161664/951836635551637514/IMG_20220311_093636.jpg" },
                3: { name: "Болотный Буб", price: 50000, image: "https://media.discordapp.net/attachments/937714691105517619/937715867171557396/PicsArt_01-31-05.23.15.jpg" },
                4: { name: "Буб с дамами", price: 100000, image: "https://media.discordapp.net/attachments/838794366423662672/937916298254499850/DqHvdW7.jpg" },
                5: { name: "Буб с гетто", price: 150000, image: "https://media.discordapp.net/attachments/838794366423662672/937916757602074624/TItC7rv.jpg" }
            })
        ]]
        
        
        
        
    `
}];