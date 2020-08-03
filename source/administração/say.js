const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MESSAGE_MANAGER")) {
      
    return message.channel.send('Você não possui permissão para isto, requer `ADMINISTRATOR`');
  }
  const sayMensagem = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send(sayMensagem);
};
exports.help = {
    name: "say"
} 