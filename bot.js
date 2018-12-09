const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require ('./ayarlar.json')

var prefix = ayarlar.prefix
client.on('ready', () => {
  console.log(` [BOT] ${client.user.tag} giriş yaptı!`);
});

client.on('message', message => {

  if (message.content.toLowerCase() === 'sa') {
    message.channel.sendMessage('Aleyküm Selam Hoşgeldin 😊');
  }

  if (message.content.toLowerCase() === 'selamun aleyküm') {
    message.channel.sendMessage('Aleyküm Selam Hoşgeldin 😊');
  }

  if (message.content === prefix + 'haxlifesosyalmedya') {
    message.reply('Forum: http://haxlife.com/index.php  Facebook: https://www.facebook.com/haxlifecom ');
  }

  if (message.content === prefix + 'avatarım'){
    message.channel.send (message.author.avatarURL);
  }

  if (message.content === prefix + "yardım"){
    message.reply ("Merhabab ben Haxlife BOT aşağıda gördüğün komutlar benim çalışmamı sağlar, İyi Günler.")
  }

  if (message.content === prefix + "sunucubilgi" ){
    const embed = new Discord.RichEmbed ()
        .addField( "Sunucu Adı" , message.guild.name,true)
        .addField("Sunucu Sahibi",message.guild.owner,true)
        .addField("Toplam Üye Sayısı",message.guild.memberCount,true)
        .addField("Oluşturulma Tarihi","08.12.2018 17:24",true)
        .setColor(0xFF3333)   

return message.channel.sendEmbed(embed)

  }
  if (message.content === prefix + "bilgi" ){
    const embed = new Discord.RichEmbed ()
        .addField( "Bot Yapımcısı" , "Zent",true)
        .addField("Sürüm","0.0.1",true)
        .setColor(0xf2f2f2)   
return message.channel.sendEmbed(embed)
  }
})

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};




client.login(ayarlar.token);