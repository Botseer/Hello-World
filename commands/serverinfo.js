const Discord = require('discord.js');
const moment = require('moment');
exports.run = (client, message, args) => {

 if(message.channel.id !== "308184273100210176") return;
 
const embed = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.setColor('RANDOM')
.setDescription('\nHello everyone, This is a server for pokemon lovers and friendly users around.\nYou can share all your idea about pokemon, talk about rom-hacking and also suggest some improvements as well.')
.addField('SERVER ID', message.guild.id, true)
.addField('OWNER', message.guild.owner.user.tag, true)
.addField('ROLES', message.guild.roles.size, true)
.addField('TOTAL MEMBERS', message.guild.memberCount)
.addField('MEMBERS ONLINE', message.guild.members.filter(m => ((m.user.presence.status === "online" )||(m.user.presence.status === "dnd" )||(m.user.presence.status === "idle" ))).size)
.addField('CREATED DATE', moment(message.guild.createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a'))

message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
  description: 'Displays some general information about the server.',
  usage: 'serverinfo'
};
