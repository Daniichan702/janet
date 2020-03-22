const { Event } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Event {

  constructor(...args) {
    super(...args, {
      enabled: true,
      once: false
    });
  }

  async run(member) {
    let channelID = member.guild.settings.channels.private
    if (!channelID) return;

    if (msg.guild.settings.filter.enableWordFiltering) {
      for (filteredWord of msg.guild.settings.filter.words) {
        if (!newMember.nickname.toLowerCase().includes(filteredWord.word.toLowerCase())) continue;
        newMember.setNickname('change name pls', 'filtered word');
      }
    }

    const embed = new MessageEmbed()
    .setTitle('Member Joined')
    .setThumbnail(member.user.avatarURL({format: 'jpg'}))
    .setColor('GREEN')
    .addField('User', member.user.tag, true)
    .addField('Warnpoints', member.user.settings.warnPoints, true)
    .addField('Joined', member.joinedAt)
    .addField('Created', member.user.createdAt)
    .setTimestamp()
    .setFooter(member.user.id);
    this.client.channels.cache.get(channelID).send(embed);
    channelID = member.guild.settings.channels.reports
    if (!channelID) return;
    if (member.user.settings.get('isMuted')) {
      await member.roles.add(member.guild.settings.roles.muted);
      embed.setTitle('Mute Evasion')
      .setColor('RED')
      this.client.channels.cache.get(channelID).send(embed);
    }
  }

  async init() {}

};
