module.exports = async (message) => {

message.guild.channels.get(`305666620796174337`).send(`**${message.author.username}** deleted a message`).catch(err => console.error(err));
};
