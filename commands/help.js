const Discord = require('discord.js');
const config = require('../config.json');
exports.run = (client, message, args) => {
  client.commandsss = new Discord.Collection();

  if(message.channel.id !== "308184273100210176") return;
  
  let permlvl = 0;
  let mod_role = message.guild.roles.find('name', config.modRole);
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 1;
  if (message.author.id === config.ownerId) permlvl = 2;
  client.commandsss = client.commands.filter(c => c.conf.permLevel <= permlvl)

  if (!args[0]) {
    const commandNames = Array.from(client.commandsss.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(`= Command List =\n\n[Use ${config.prefix}help <commandname> for details]\n\n${client.commandsss.map(c => `${config.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`, {code: "asciidoc"})
  } else {
    let command = args[0];
    if (client.commandsss.has(command)) {
      command = client.commandsss.get(command);
      message.channel.send(`= ${command.help.name} = \n${command.help.description}\nUsage:: ${command.help.usage}`, {code: "asciidoc"});
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]'
};
