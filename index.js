const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const config = require("./config.json");
const fs = require("fs");

bot.commands = new Discord.Collection()

fs.readdir(`./source/administração`, (err, files) => {
    if(err) console.log(err)
    let arquivoJS = files.filter(f => f.split('.').pop() === 'js')
    arquivoJS.forEach((f, i) => {
        let props = require(`./source/administração/${f}`)
        console.log(`Comando ${f} carregado.`)
        if (props.help && props.help.name) {
            bot.commands.set(props.help.name, props)
        } else {
            console.log(`Comando ${f} não foi concluído, Reveja-o`)
        }
    })
})

fs.readdir(`./source/comandos`, (err, files) => {
    if(err) console.log(err)
    let arquivoJS = files.filter(f => f.split('.').pop() === 'js')
    arquivoJS.forEach((f, i) => {
        let props = require(`./source/comandos/${f}`)
        console.log(`Comando ${f} carregado.`)
        if (props.help && props.help.name) {
            bot.commands.set(props.help.name, props)
        } else {
            console.log(`Comando ${f} não foi concluído, Reveja-o`)
        }
    })
})

fs.readdir(`./source/diversos`, (err, files) => {
    if(err) console.log(err)
    let arquivoJS = files.filter(f => f.split('.').pop() === 'js')
    arquivoJS.forEach((f, i) => {
        let props = require(`./source/diversos/${f}`)
        console.log(`Comando ${f} carregado.`)
        if (props.help && props.help.name) {
            bot.commands.set(props.help.name, props)
        } else {
            console.log(`Comando ${f} não foi concluído, Reveja-o`)
        }
    })
})

fs.readdir(`./source/entretenimento`, (err, files) => {
    if(err) console.log(err)
    let arquivoJS = files.filter(f => f.split('.').pop() === 'js')
    arquivoJS.forEach((f, i) => {
        let props = require(`./source/entretenimento/${f}`)
        console.log(`Comando ${f} carregado.`)
        if (props.help && props.help.name) {
            bot.commands.set(props.help.name, props)
        } else {
            console.log(`Comando ${f} não foi concluído, Reveja-o`)
        }
    })
})

fs.readdir(`./source/mensagens`, (err, files) => {
    if(err) console.log(err)
    let arquivoJS = files.filter(f => f.split('.').pop() === 'js')
    arquivoJS.forEach((f, i) => {
        let props = require(`./source/mensagens/${f}`)
        console.log(`Comando ${f} carregado.`)
        if (props.help && props.help.name) {
            bot.commands.set(props.help.name, props)
        } else {
            console.log(`Comando ${f} não foi concluído, Reveja-o`)
        }
    })
})

fs.readdir(`./source/minecraft`, (err, files) => {
    if(err) console.log(err)
    let arquivoJS = files.filter(f => f.split('.').pop() === 'js')
    arquivoJS.forEach((f, i) => {
        let props = require(`./source/minecraft/${f}`)
        console.log(`Comando ${f} carregado.`)
        if (props.help && props.help.name) {
            bot.commands.set(props.help.name, props)
        } else {
            console.log(`Comando ${f} não foi concluído, Reveja-o`)
        }
    })
})

bot.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
  
    if(!message.content.startsWith(prefix))return;
  
    let arquivoscmd = bot.commands.get(command.slice(prefix.length));
    if(arquivoscmd) arquivoscmd.run(bot, message, args);
  });

// ========================================================================================================

// status e ação do bot
bot.on('ready', () => {
    console.log(`O bot ${bot.user.tag} foi iniciado com sucesso, temos ${bot.users.cache.size} membros no servidor!`);
    bot.user.setStatus('online'); // Status: dnd, idle, online, invisible
    var tabela = [
        {name: 'Em desenvolvimento', type: "PLAYING"},
        {name: `⚡BlackLabel | BOTS - https://discord.gg/G4CKV93`, type: 'PLAYING'}
    ]
    setInterval(function(){
        let altstatus = tabela[Math.floor(Math.random() * tabela.length)];
        bot.user.setActivity(altstatus)
      }, 7000)
  })

bot.login(config.token)