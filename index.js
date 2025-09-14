const { Client } = require('discord.js-selfbot-v13');
require('dotenv').config();
const client = new Client();
const TARGET_CHANNEL_ID = process.env.chnlID;
const TOKEN = process.env.token;

client.on('ready', async () => {
  await channel.send(`${client.user.username} is ready!`);
})

client.on('guildMemberAdd', async member => {
  // console.log(`Member ${member.user}`);
  // console.log(`Member ${member.user.tag} joined the guild ${member.guild.name}`);
  const channel = client.channels.cache.get(TARGET_CHANNEL_ID);
  // if (!channel) return console.log(`Could not find channel with ID ${TARGET_CHANNEL_ID} in guild ${member.guild.name}`);

  // Send the welcome message
  await channel.send(`${member.user.tag} joined ${member.guild.name}
  -------_-------`);
})

client.login(TOKEN);
