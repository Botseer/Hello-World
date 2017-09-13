module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async execute(guild) {
    await this.client.user.setGame(`${this.client.config.setting.prefix}help | ${this.client.guilds.size} Servers`);
  }
};