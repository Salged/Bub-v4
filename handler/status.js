module.exports = (bot) => {
    bot.status({
  text: "$numberseparator[$allmemberscount;.] users | $numberseparator[$servercount;.] guilds",
  type: "WATCHING",
  time: 60
});
    
bot.status({
      text: "/help",
      type: "PLAYING",
      time: 60
});
bot.status({
  text: "$hour:$minute MSK $timezone[Europe/Moscow]",
  type: "LISTENING",
  time: 60
})
}
