// Basic stuff
const Discord = require("discord.js");
const bot = new Discord.Client()
var profanities = require("profanities");

// Login
bot.login(process.env.BOT_TOKEN);

// Listening
bot.on("message", message =>
{

    // Variables
    var sender = message.author;
    var msg = message.content.toUpperCase();
    var prefix = "!";

    if(sender.id === "422841374769938433")
    {
        return;
    }
    // Profanity filter test
      if(msg === profanities);
      {
          const embed =  new Discord.RichEmbed()
          .setTitle("Warning!!!")
          .setAuthor("Profanity Bot")
          .setColor(16711680)
          .addField(`@${message.author.username} said something suspicious in: #${message.channel.name}`, `The message was: ${message.content}`)
          .setTimestamp()
          bot.channels.get("423128277327020033").send({embed});
      };
});
