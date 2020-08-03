const Discord = require("discord.js");

exports.run = async(bot, message, args) => {

    let ping = new Discord.MessageEmbed()
    .setThumbnail(message.author.displayAvatarURL())
    .setAuthor("Latência")
    .setDescription(`seu ping é ${bot.ws.ping}ms`)
    
    message.reply(ping)
}
exports.help = {
    name: 'ping'
}
