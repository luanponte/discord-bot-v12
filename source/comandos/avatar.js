const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
    if(!args[0]) {
         message.reply(`Você deve mencionar um usuário para ver seu avatar.`)
         
        return;
    };

    let user = message.mentions.users.first() || bot.users.cache.get(arg[0]) || message.author;
    let avatar = user.avatarURL({dynamic: true, format: "png", size: 1024});

    let embed = new Discord.MessageEmbed()
    .setColor('#36393f')
    .setTitle(`Avatar de ${user.username}`)
    .setDescription(`**Para baixar, [Clique aqui](${user.displayAvatarURL()})**`)
    .setImage(avatar)
    .setFooter(`Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(embed)

};
exports.help = {
    name: 'avatar'
}