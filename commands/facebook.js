const Command = require('../base/Command.js');
const { RichEmbed } = require('discord.js');

class facebook extends Command {
  constructor(client) {
    super(client, {
      name: 'facebook',
      description: 'Shows the offical facebook group of this discord server.',
      usage: 'facebook',
      category: "Support",
      aliases: ['fb']
    });
  }

  async run(message, args, level) {
      const embed = new RichEmbed()
      .setAuthor("FACEBOOK")
      .setDescription('Are you around the social media Facebook?\nYou might love to be around here then.')
      .addField('Link','https://www.facebook.com/groups/Pokedestiny')
      .setThumbnail('http://www.freeiconspng.com/uploads/facebook-transparent-logo-png-0.png')
      message.channel.send({embed}).catch(e => console.error(e));
  }
}
module.exports = facebook;