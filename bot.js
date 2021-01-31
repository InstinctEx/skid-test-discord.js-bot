const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);
});
const channelId = '805064081630298154' // welcome channel
const targetChannelId = '805231246312734752' // rules and info
client.on("guildMemberAdd", async member => {
    const message = `Please welcome <@${
        member.id
      }> to the server! You have 2 minutes to complete the skid test. Please check out your dms and ${member.guild.channels.cache
        .get(targetChannelId)
        .toString()}`
    const channel = member.guild.channels.cache.get(channelId)
      channel.send(message)
         member.send( "Decode this string : ```SSBhbSBub3QgYSBza2lkIHlvdSBuaWdnZXIgYW5kIEkgd2lsbCBub3QgYXNrIHF1ZXN0aW9ucyBhYm91dCBkZG9zIGFuZCBzaGl0``` ")
         .then((newmsg) => { //Now newmsg is the message you sent
            newmsg.channel.awaitMessages(response => response.content, {
              max: 1,
              time: 120000,
              errors: ['time'],
            }).then((collected) => {
                if (collected.first().content == "I am not a skid you nigger and I will not ask questions about ddos and shit") {
                 newmsg.channel.send(`Congrats You passed the first question ! Prepare for the second one. (1/3)`);
                 const Test2 = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('What is does boot mean?')
                    .addFields(
                        { name: ':one:', value: 'Ddos attack' },
                        { name: ':two:', value: 'Starting a computer', inline: true },
                    
                    )
                        newmsg.channel.send(Test2).then((newmsg1) => { //Now newmsg1 is the message you sent
                        newmsg1.react('1⃣').then(() => newmsg1.react('2⃣'));
                        const filter = (reaction, user) => {
                        return ['1⃣', '2⃣'].includes(reaction.emoji.name) && user.id === member.id;
                    };
                    
                    newmsg1.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                        .then(collected => {
                            const reaction = collected.first();
                    
                            if (reaction.emoji.name === '1⃣') {
                                newmsg1.channel.send('Test Passed (2/3)');

                                const testFinal = new Discord.MessageEmbed()
                                    .setColor('#0099ff')
                                    .setTitle('What does `ls` mean?')
                                    .addFields(
                                        { name: ':one:', value: 'List files' },
                                        { name: ':two:', value: 'Navigate into a directory', inline: true },
                                    
                                    )
                                    newmsg1.channel.send(testFinal).then((newmsg2) => { //Now newmsg2 is the message you sent
                                        newmsg2.react('1⃣').then(() => newmsg2.react('2⃣'));
                                        const filter = (reaction, user) => {
                                        return ['1⃣', '2⃣'].includes(reaction.emoji.name) && user.id === member.id;
                                    };

                                    newmsg2.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                                    .then(collected => {
                                        const reaction = collected.first();
                                
                                        if (reaction.emoji.name === '1⃣') {
                                            newmsg2.channel.send('Test Passed (3/3).You have been verified!');
                                            let server = client.guilds.cache.get('myserverID')
                                            var memberRole= server.roles.cache.find(role => role.name === "Member")
                                            let member = server.members.cache.get(member.id)
                                            
                                            member.roles.add(memberRole)
                                        }else {
                                            newmsg2.channel.send('Damn nigga you a skid');
                                        }
                                    });

                                    }).catch(() => {
                                        newmsg1.channel.send('Woopsie I brooke');
                                    });
                            }
                            else {
                                newmsg1.channel.send('Damn nigga you a skid');
                            }
                        })
                        .catch(collected => {
                            
                            message.reply('you didn\'t react skid');
                        }); 
                        }
                    )}                 
            }).catch(() => {
              newmsg.channel.send('whoopsie I brooke');
            });
        })
});

client.login("TOKEN");
