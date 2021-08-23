require("dotenv").config();

const { Client, Intents, ReactionEmoji } = require('discord.js');
const client = new Client({ 
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    partials: ['MESSAGE', 'REACTION']
});
const PREFIX = "out/";  // Prefix command to use in the discord. i.e: out/kick ID. Kicks the person with "ID".

client.on('ready', () => {
    console.log(`${client.user.tag} is with us right now!!`);
});

client.on('messageCreate', (message) => {
    console.log(`${message.author.tag}:${message.content}`);
    if (message.content === 'Michael') {                       //The Office Pun :p
        message.reply('That\'s what she said');               //TWSS
    }
});

//Lets kick some members because they're annoying

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);
    if (CMD_NAME === 'kick') {
        if (args.length === 0) return message.reply('Geez! Atleast give an ID :v');
        const member = message.guild.members.cache.get(args[0]);
        if (member) {
            member.kick();
        } else {
            message.channel.send('Are u kiddin? Give correct ID (-_-)');
        }
    }
    } 
});

//Reaction roles adding

client.on('messageReactionAdd', (reaction, user) => {
    console.log('Role initiated');  // Just to see if the method is working
    const { name } = reaction.emoji;
    const member = reaction.message.guild.memebers.cache.get(user.id);
    if (reaction.message.id === '879319193042972752') {
        switch (name) {
            case '🥠':
                member.roles.add('879319933811556352'); 
                break;
            case '🥧':
                member.roles.add('879319965524721674'); 
                break;
            case '☕':
                member.roles.add('879320050211909633'); 
                break;
        }
        
    }
});

//Reaction roles remove

client.on('messageReactionRemove', (reaction, user) => {
    const { name } = reaction.emoji;
    const member = reaction.message.guild.memebers.cache.get(user.id);
    if (reaction.message.id === '879319193042972752') {
        switch (name) {
            case '🥠':
                member.roles.remove('879319933811556352'); 
                break;
            case '🥧':
                member.roles.remove('879319965524721674'); 
                break;
            case '☕':
                member.roles.remove('879320050211909633'); 
                break;
        }
        
    }
});

client.login(process.env.DIS_BOT_TKN);



