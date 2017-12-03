const Command = require('../base/Command.js');
const { inspect } = require('util');

class Eval extends Command {
  constructor(client) {
    super(client, {
      name: 'eval',
      description: 'Evaluates arbitrary Javascript..',
      usage: 'eval <code>',
      category: 'Hidden',
      permLevel: 10,
      hidden: true
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    try {
			let evaled = eval(code);
			if (evaled instanceof Promise) evaled = await evaled;
			if (typeof evaled !== 'string') evaled = inspect(evaled, { depth: 0 });
			msg.sendCode('js', this.client.methods.util.clean(evaled));
		} catch (err) {
			message.channel.send(` \`ERROR\`\n${err}`);
			if (err.stack) message.channel.send(`\`error:\` ${err.stack}`);
		}
  }
}

module.exports = Eval;
