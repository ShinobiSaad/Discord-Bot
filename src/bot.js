console.clear();

const Discord = require("discord.js");
const config = require("./Data/config.json");

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", () => console.log("Bot is on Fiyaah"));

client.on("message", (message) => {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (message.content === 'Michael') {
        message.channel.send('That\'s what she said');
    }
});

client.login(config.token); 