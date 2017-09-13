const { RichEmbed } = require('discord.js');

module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async execute(member) {
      if(member.guild.id != "304921323577147392") return;
    var welcomemsg = 
    [
        `**${member.user.tag}**, if our dog doesn't like you, we won't either !`,
        `Come in **${member.user.tag}**, We are awesome :stuck_out_tongue_winking_eye: !!`,
        `You look hot **${member.user.tag}** :kissing:`,
        `**${member.user.tag}**, Around here NORMAL is just a setting on the Dryer.`,
        `**${member.user.tag}**, Welcome to the Porch... where wasting time is considered.`,
        `**${member.user.tag}**, be WISE ... **Dont DRINK & DRIVE** !!`,
        `Welcom Tursit **${member.user.tag}**, We SPIK INGLISH.`,
        `Oh NO, Not you again **${member.user.tag}**`,
        `**${member.user.tag}**, DOORBELL BROKEN! Yell __"DING DONG"__ Loudly.`,
        `Yay! you made it **${member.user.tag}**, Now the party can start.`,
        `I'm already disturbed, Please come in **${member.user.tag}**.`,
        `**${member.user.tag}**, Forget the DOGS ... **BEWARE OF KIDS** :stuck_out_tongue_winking_eye:`,
        `**${member.user.tag}**, **SIT LONG**, **TALK MUCH**, **LAUGH OFTEN**`
    ] 
    var randomNumber = Math.floor(Math.random()*welcomemsg.length);
    const embed = new RichEmbed()
    .setColor(0x66CC00)
    .setDescription(welcomemsg[randomNumber])
    .setThumbnail(member.user.displayAvatarURL)
    .setTimestamp()
    .setFooter(this.client.user.username, this.client.user.avatarURL);
    member.guild.channels.get(`304930941174939649`).send({embed}).catch(err => console.error(err));
    member.guild.channels.get(`304926866995937282`).send(`Welcome to **${member.guild.name}**, <@${member.user.id}>!\nMake sure to have a quick look around <#304921323577147392>`).catch(err => console.error(err));
  }
};