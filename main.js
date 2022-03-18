const { Client, Intents, Collection} = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = '!';
const fs = require('fs');
 
bot.commands = new Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}

bot.once('ready' , () => {
    console.log('TutBot is Ready!')
})

bot.on("message", msg => {
    if (msg.author.bot) return

    else if (msg.content === "hi") {
        msg.reply("Hello 👋")
    }
    else if (msg.content === "ping")
         msg.channel.send("Pong !")
})

bot.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        bot.commands.get('ping').execute(message, args);
    } 
    else if(command === 'youtube'){
        bot.commands.get('youtube').execute(message, args);
    }
}),
bot.login("YOUR_BOT_TOKEN")
