const Command = require('../base/Command.js');
const { RichEmbed } = require('discord.js');
const moment = require('moment');

class ServerInfo extends Command {
  constructor(client) {
    super(client, {
      name: 'serverinfo',
      description: 'Displays server information & statistics.',
      usage: 'serverinfo',
      guildOnly: true,
      aliases: ['serverstats','guildinfo','guildstats','sinfo']
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    const embed = new RichEmbed()
      .setAuthor(message.guild.name)
      .setColor(3447003)
      .setThumbnail(message.guild.iconURL)
      .setDescription(`Owner: ${message.guild.owner.user.tag} (${message.guild.owner.id})`)
      .addField('ABOUT', '\nHello everyone, This is a server for pokemon lovers and friendly users around.\nYou can share all your idea about pokemon, talk about rom-hacking and also suggest some improvements as well.')
      .addField('Server ID', message.guild.id, false)
      .addField('Member Count', `${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size} (${message.guild.members.filter(m=>m.user.bot).size} bots)`, true)
      .addField('Members Online', message.guild.members.filter(m => ((m.user.presence.status === "online" )||(m.user.presence.status === "dnd" )||(m.user.presence.status === "idle" ))).size, true)
      .addField('Roles', message.guild.roles.size, false)
      .addField('Created', moment(message.guild.createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a'), false)
      .setTimestamp()
      .setFooter(this.client.user.username, this.client.user.avatarURL);
    message.channel.send({embed}).catch(e => console.error(e));
  }
}

module.exports = ServerInfo;