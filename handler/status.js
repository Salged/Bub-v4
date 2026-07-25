module.exports = (bot) => {
    bot.status({
  text: "$numberseparator[$allmemberscount;.] пользователей | $numberseparator[$servercount;.] серверов",
  type: "WATCHING",
  time: 60
});
    
bot.status({
      text: "/help",
      type: "PLAYING",
      time: 60
});
bot.status({
  text: "$hour:$minute МСК $timezone[Europe/Moscow]",
  type: "LISTENING",
  time: 60
})
}
