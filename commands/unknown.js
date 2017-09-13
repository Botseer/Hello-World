const Command = require('../base/Command.js');
const { RichEmbed } = require('discord.js');

class Unknown extends Command {
  constructor(client) {
    super(client, {
      name: 'unknown',
      description: 'Its just unknown .....',
      usage: 'Unknown (any string)',
      category: "fun"
    });
  }

  async run(message, args, level) {
      let outMsg ='';
      var emot;
      if(message.channel.type !== "dm") message.delete();

      let letterssp = args.join(" ").split("");

      for (let i=0; i< letterssp.length; i++)
      {
          if(letterssp[i] === " ") {
            outMsg += "     ";
            continue;
        }              
          emot = this.client.emojis.find('name',('unknown'+letterssp[i].toUpperCase()));
          if (emot) outMsg += emot;
      }
      message.channel.send(outMsg);      
  }
}

module.exports = Unknown;