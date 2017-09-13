const { RichEmbed } = require('discord.js');

module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async execute(member) {
      if(member.guild.id != "304921323577147392") return;
    var byebyemsg = 
    [
        `**${member.user.tag}** is gone, Cries !!!`,
        `**${member.user.tag}** ran away seeing a :snake: :stuck_out_tongue_winking_eye:`,
        `We have lost our player **${member.user.tag}**!`,
        `We need a substitute for **${member.user.tag}**.`,
	    `Please say goodbye to **${member.user.tag}** we will miss you!`,
	    `**${member.user.tag}** left without telling bye :neutral_face: .`,
	    `I had sensed something wiered about **${member.user.tag}**`
    ] 
    var randomNumber = Math.floor(Math.random()*byebyemsg.length); 
    const embed = new RichEmbed()
    .setColor(0xE0082d)
    .setDescription(byebyemsg[randomNumber])
    .setThumbnail(member.user.displayAvatarURL)
    .setTimestamp()
    .setFooter(this.client.user.username, this.client.user.avatarURL);
    member.guild.channels.get(`304930941174939649`).send({embed}).catch(err => console.error(err));
    member.guild.channels.get(`304926866995937282`).send(`Welcome to **${member.guild.name}**, <@${member.user.id}>!\nMake sure to have a quick look around <#304921323577147392>`).catch(err => console.error(err));
  }
};