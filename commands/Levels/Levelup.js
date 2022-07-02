module.exports = ({
name: "$alwaysExecute",
code: `
**$userTag[$authorID]**, ты повысил свой лвл до **$getUserVar[lvl]** <:bubkrytoi:838837227609522226>


$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$setUserVar[xp;0]
$setUserVar[sledxp;$sum[$getUserVar[sledxp];100]]
$onlyIf[$getUserVar[xp]>=$getUserVar[sledxp];]`
})
