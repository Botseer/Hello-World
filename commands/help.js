const Command = require('../base/Command.js');

class Help extends Command{
    constructor(client){
        super(client,{
            name: "help",
            description: "Displays all the available commands that you can use.",
            usage: "help [command_name]",
            aliases: ['h','halp'],
        });
    }

    async run(message, args, level) {
        let prefix = this.client.config.setting.prefix;

        if(!args[0]) {
            const myCommands = message.guild ? this.client.commands.filter(cmd => cmd.conf.permLevel <= level) : this.client.commands.filter(cmd => cmd.conf.permLevel <= level &&  cmd.conf.guildOnly !== true);
            const commandNames = myCommands.keyArray();
            const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
            let currentCategory = '';
            let output = `= Command List =\n\n[Use ${this.client.config.setting.prefix}help <commandname> for details]\n`;
            const sorted = myCommands.sort((p, c) => p.help.category > c.help.category ? 1 :  p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1 );
            sorted.forEach( c => {
                const cat = c.help.category.toLowerCase();
                if (currentCategory !== cat) {
                    output += `\n== ${cat} ==\n`;
                    currentCategory = cat;
                }
                output += `${prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}\n`;
            });
            message.channel.send(output, {code:'asciidoc'});
        }else{
            let command = args[0];
            if (this.client.commands.has(command)) {
                command = this.client.commands.get(command);
                if (level < command.conf.permLevel) return;
                message.channel.send(`= ${command.help.name} = \n${command.help.description}\nusage:: ${command.help.usage}\nalises:: ${command.conf.aliases.join(', ')}\ncategory:: ${command.help.category}`, {code:'asciidoc'});
            }
        }
    }
}

module.exports = Help;