const Command = require('../base/Command.js');
const { RichEmbed } = require('discord.js');
const moment = require('moment');

class Userinfo extends Command{
    constructor(client) {
    super(client, {
      name: 'userinfo',
      description: 'Displays user information.',
      usage: 'userinfo',
      aliases: ['userstats','uinfo'],
      guildOnly: true
    });
  }

    async run(message, args, level) {
        let tempn;
        if (message.mentions.users.size === 0)    {
            tempn = message.author.id;
        } else {
            tempn = message.mentions.users.first().id;
        }

        let ui_name = this.client.guilds.get(message.guild.id).members.get(tempn);

        const embed = new RichEmbed()
		.setAuthor(ui_name.user.username, ui_name.user.avatarURL)
		.setColor(0xb0c4de)
		.addField('Username', ui_name.user.username, true)
		.addField('Nickname', ui_name.nickname, true)
		.addField('Created', moment(ui_name.user.createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a'))
		.addField('Joined', moment(ui_name.joinedAt).format('dddd, MMMM Do YYYY, h:mm:ss a'))
		.addField('Discrim', `#**${ui_name.user.discriminator}**`)
		.addField('Status', ui_name.user.presence.status,true)
		.addField('Bot', ui_name.user.bot,true)
        .setTimestamp()
        .setFooter(this.client.user.username, this.client.user.avatarURL);
        message.channel.send({embed}).catch(e => console.error(e));
    }   
}

module.exports = Userinfo;