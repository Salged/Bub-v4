module.exports = ({
name: "chest",
type: "interaction",
prototype: "slash",
code: `

$interactionReply[Вы купили **$interactionData[options.data[0].options[1].value]** $customEmoji[q_chest_$interactionData[options.data[0].options[0].value]] за $getvar[wallet]]


$onlyif[$interactionData[options._subcommand]==buy;]`

})
