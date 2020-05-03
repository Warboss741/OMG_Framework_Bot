const Discord = require('discord.js');
const bot = new Discord.Client();
const tokens = require('./tokens.json');
const time = require('date-time');

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}));
});

const prefix = '*';

bot.on('message', msg => {
    if (!msg.content.startsWith(prefix)) {
        return;
      } else { 
        let args = msg.content.substring(prefix.length).split(" ");
    
        switch (args[0]) {
            case 'ping':
                const ping = new Discord.MessageEmbed()
                    .setTitle('Ping')
                    .addField('-', bot.ws.ping + ' ms')
                msg.channel.send(ping)
            break;


        }
    }
});

bot.login(token.token)