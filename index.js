const { Client, Collection } = require('discord.js');
const {readdir} = require('fs-nextra');
if (process.version.slice(1).split('.')[0] < 8) throw new Error('Node 8.0.0 or higher is required. Update Node on your system.');


class LookerBOT extends Client{
    constructor(options) {
    super(options);
    this.config = require('./config.json');
    this.commands = new Collection();
    this.aliases = new Collection();
  }

permLevelCal(message){
    let permLvl = 0;

    if(message.author.id === client.config.ownerID) return permLvl = 10;
    if (!message.guild || !message.member) return 0;

    try{
        const moderator = message.guild.roles.find(r => r.name.toLowerCase() === client.config.setting.modRole.toLowerCase());
        if (moderator && message.member.roles.has(moderator.id)) permlvl = 5;
    }
    catch (error) {
        console.log("moderator role not found")
    }
    return permLvl;

}

log(type, message, title) {
    if (!title) title = 'Log';
    console.log(`[${type}] [${title}]${message}`);
  }

}

const client = new LookerBOT();

const handler = async() => {

    //event handler
    const eventFiles = await readdir('./events/')
    client.log('log',`loading a total of ${eventFiles.length} events.`)

    eventFiles.forEach(file =>{
        const eventName = file.split('.')[0];
        const event = new (require(`./events/${file}`))(client);
        client.on(eventName, (...args) => event.execute(...args));
        client.log('log',`Loading Event ${eventName} ✔`);
        delete require.cache[require.resolve(`./events/${file}`)];
    });

    //command handler
    const cmdFiles = await readdir('./commands/');
    client.log('log', `Loading a total of ${cmdFiles.length} commands.`);

    cmdFiles.forEach(f => {
    try {
        const props = new (require(`./commands/${f}`))(client);
        if (f.split('.').slice(-1)[0] !== 'js') return;
        client.log('log', `Loading Command: ${props.help.name}. ✔`);
        client.commands.set(props.help.name, props);
        if (props.init) props.init(client);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    } catch (e) {
        client.log(`Unable to load command ${f}: ${e}`);
    }
  });

  client.login(process.env.TOKEN);
};

handler();
