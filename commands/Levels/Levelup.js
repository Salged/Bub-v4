module.exports = ({
name: "$alwaysExecute",
code: `
**$userTag[$authorID]**, ты повысил свой лвл до **$getUserVar[lvl]** <:bubkrytoi:838837227609522226>


$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$setUserVar[sledxp;$sum[$getUserVar[sledxp];100]]
$setUserVar[xp;$sub[$getuservar[xp];$getuservar[sledxp]]]
$onlyIf[$getUserVar[xp]>=$getUserVar[sledxp];]`
})
