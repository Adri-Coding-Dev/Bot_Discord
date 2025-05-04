require('dotenv').config();
const{Client,IntentsBitField}=require('discord.js');

const client=new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready',(c)=>{
    console.log('El bot se ha conectado Correctamente');
});

client.on('messageCreate',(message)=>{
    if(message.author.bot){
        return;
    }
    if(message.content==='hola'){
        message.reply('hola');
    }
});

client.login(process.env.TOKEN);