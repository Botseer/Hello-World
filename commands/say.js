exports.run = (client, message, args) => {
return;
if (message.channel.id !=="308184273100210176") return;

let tempmsg = args.join(" ");
message.delete();

message.guild.channels.get("305666620796174337").send(`**${message.author.tag}: **` + tempmsg);
message.channel.send("**" + tempmsg + "**");

}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'say',
  description: 'The bot says what you type.',
  usage: 'say <message>'
};
