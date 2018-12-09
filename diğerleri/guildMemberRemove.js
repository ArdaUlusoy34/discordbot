module.exports = member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`${member.user.username} Gitti. Güle Güle 😔 `);
  };