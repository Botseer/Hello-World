const Command = require('../base/Command.js');

class Invite extends Command {
  constructor(client) {
    super(client, {
      name: 'invite',
      description: 'Makes a invite link to the server which lasts for 24 hours.',
      usage: 'invite [reason]',
      guildOnly: true,
      category: "Support",
      aliases: ['invit']
    });
  }

  async run(message, args, level) {/*304921323577147392*/
    message.guild.channels.get('356849403295694850').createInvite().then(invite =>  
    message.reply(`Here you wanted a invite link right ??\nThis invite link will last only for 24 hours. Make sure you use it properly.\n` + invite.url)
).catch(e => console.error(e));
  }
}

module.exports = Invite