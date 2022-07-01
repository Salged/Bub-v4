module.exports = ({
name: "rankk",
code: `
$djsEval[
  const Discord = require ('discord.js');
  const canvacord = require('canvacord');
  const rank = new canvacord.Rank()
  .setRank($getLeaderboardInfo[lvl;$findUser[$message];user;top])
 .setStatus("$status[$findUser[$message]]")
  .setAvatar("$replaceText[$replaceText[$userAvatar[$findUser[$message]];.webp;.png];?size=2048;]")
  .setBackground("IMAGE", "https://media.discordapp.net/attachments/840523345132912640/861260288824705044/20210704_175957.jpg")
  .setCurrentXP($getUserVar[xp;$findUser[$message]])
  .setRequiredXP($getUserVar[sledxp;$findUser[$message]])
  .setStatus("$status[$findUser[$message]]")
  .setLevel($getUserVar[lvl;$findUser[$message]])
  .setProgressBar("#$getvar[color]", "COLOR")
  .setUsername("$nickname[$findUser[$message]]")
  .setDiscriminator("$discriminator[$findUser[$message]]");
  rank.build();yes]
`
})
