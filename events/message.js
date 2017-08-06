const config = require('../config.json');
const errorChecks = require('../functions/parseText.js');

module.exports = async message => {
  let client = message.client;
  if (message.author.bot) return;
  if ((message.content.toLowerCase().includes('https://discord.gg')) || (message.content.toLowerCase().includes('https://discord.me')) || (message.content.toLowerCase().includes('discord.gg')) || (message.content.toLowerCase().includes('discord.me'))) {
    if (message.author.id === "279550792774582272") return;
    message.delete();
    message.reply("You cant promote your servers here!");
    message.guild.channels.get("305666620796174337").send(`<@${message.author.id}> tried promoting personal servers here.`);
  }
  errorChecks(message, message.content);
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(' ')[0].slice(config.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
};
