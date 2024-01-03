const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const Genius = require("genius-lyrics"); 
const yts = require("yt-search");
const ytdl = require("ytdl-core");
const githubstalk = require('./lib/githubstalk');
const axios = require('axios');
 const Client = new Genius.Client("jKTbbU-6X2B9yWWl-KOm7Mh3_Z6hQsgE4mmvwV3P3Qe7oNa9-hsrLxQV5l5FiAZO"); // Scrapes if no key is provided
module.exports = escalibud = async (client, m, chatUpdate) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    // var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/"
    var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";
    const isCmd2 = body.startsWith(prefix);
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
const Heroku = require("heroku-client");  
 const appname = process.env.APP_NAME || '';
 const herokuapi = process.env.HEROKU_API;

    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    let text = (q = args.join(" "));
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
const wapresence = process.env.WA_PRESENCE || 'recording';
const autobio = process.env.AUTOBIO || 'TRUE';
const dev = process.env.OWNER || '254798242085'

    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];

    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };
 const devkresswell = dev.split(",");
    const Owner = devkresswell.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)

    // Group
    
    const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";

    const participants = m.isGroup ? await groupMetadata.participants : ""; 
     const groupAdmin = m.isGroup ? await getGroupAdmins(participants) : ""; 
     const isBotAdmin = m.isGroup ? groupAdmin.includes(botNumber) : false; 
     const isAdmin = m.isGroup ? groupAdmin.includes(m.sender) : false;
const admin = process.env.ADMIN_MSG || 'Admin Command Only';
    const group = process.env.GROUP_ONLY_MSG || 'Use this command only in groups!!';
    const botAdmin = process.env.BOT_ADMIN_MSG || 'I need to be admin to perform that task'
    const NotOwner = process.env.NOT_OWNER_MSG || 'Owner Command';
    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;

if (wapresence === 'recording' && !m.isGroup) { 

  client.sendPresenceUpdate('recording', m.chat);
} else if (wapresence === 'typing' && !m.isGroup) { 

  client.sendPresenceUpdate('composing', m.chat);
    }

if (autobio === 'TRUE'){ 
            setInterval(() => { 

                                 const date = new Date() 

                         client.updateProfileStatus( 

                                         `InfinityAI is active now\n\n${date.toLocaleString('en-US', { timeZone: 'Africa/Nairobi' })} It's a ${date.toLocaleString('en-US', { weekday: 'long', timeZone: 'Africa/Nairobi'})}.` 

                                 ) 

                         }, 10 * 1000) 

}

    if (isCmd2 && !m.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ LOGS ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));
    } else if (isCmd2 && m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ LOGS ]")),
        color(argsLog, "turquoise"),
        chalk.magenta("From"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),
        chalk.blueBright("IN"),
        chalk.green(groupName)
      );
    }

    if (isCmd2) {
      switch (command) {
        case "help": case "menu": case "start": case "info":
          m.reply(`*Mi ata Sio Bot😂😂*
            

◇Menu
◇Play
◇Yts
◇Ytv 
◇Yts`)
          break;
case '':
        if(isCmd2){
        client.sendMessage(from, { react: { text: "✨" , key: m.key }})

     reply(`Hello ${pushname} ,You used my prefix.Please  Type *${prefix}help* to get my full command list.`)
        }

    break;
case 'ghstalk': case 'githubstalk': case'github': {
  client.sendMessage(from, { react: { text: "🔍" , key: m.key }})

  if (!q) return replay(`Give me a user name like *${prefix}github EscaliBud*`)

  gitdata = await githubstalk.githubstalk(`${q}`)
  client.sendMessage(m.chat, { image: { url : gitdata.profile_pic }, caption: 
  `*ㅤㅤㅤ|ㅤㅤㅤGithub Info ㅤㅤㅤ|\*

  🚩 Id : ${gitdata.id}
  🔖 Nickname : ${gitdata.nickname}
  🔖 Username : ${gitdata.username}
  ✨ Bio : ${gitdata.bio}
  🏢 Company : ${gitdata.company}
  📍 Location : ${gitdata.location}
  📧 Email : ${gitdata.email}
  🔓 Public Repo : ${gitdata.public_repo}
  🔐 Public Gists : ${gitdata.public_gists}
  💕 Followers : ${gitdata.followers}
  👉 Following : ${gitdata.following}` }, { quoted: m } )
  }
  break;  
case 'play':
    case 'stream': {
        if (!text) {
            reply('Provide a search term!\nE.g: play NWA Appetite for destruction. ')
            return;
        }
        try {
            const {
                videos
            } = await yts(text);
            if (!videos || videos.length <= 0) {
                reply(`No Matching videos found for : *${args[0]}*!!`)
                return;
            }
            let urlYt = videos[0].url
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= 1800) {
                reply(`File is too big for me to download`);
                return;
            }
            const getRandonm = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandonm(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            console.log("Audio downloading ->", urlYt);

reply(`_Downloading ${infoYt.videoDetails.title}_`);
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            // Convert the file size to megabytes (optional)
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            console.log("Audio downloaded ! \n Size: " + fileSizeInMegabytes);
            if (fileSizeInMegabytes <= 40) {
                //sendFile(from, fs.readFileSync(`./${randomName}`), msg, { audio: true, jpegThumbnail: (await getBuffer(dl.meta.image)).buffer, unlink: true })
                await client.sendMessage(
                    from, {
                        document: fs.readFileSync(`./${randomName}`),
                        mimetype: "audio/mpeg",
                        fileName: titleYt + ".mp3",
                    }, {
                        quoted: m
                    }
                );
            } else {
                reply(`File size bigger.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            reply(e.toString())
        }
    }
break;
       case 'ytmp4':
case 'ytvideo':
case 'ytv':
        const getRandommm = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
        if (args.length === 0) {
            reply(` URL is empty! \nSend ${prefix}ytmp4 url`);
            return;
        }
        try {
            let urlYt = args[0];
            if (!urlYt.startsWith("http")) {
                reply(`Give youtube link!`);
                return;
            }
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= 1800) {
                reply(`Video file too big!`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandommm(".mp4");

            const stream = ytdl(urlYt, {
                    filter: (info) => info.itag == 22 || info.itag == 18,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            //22 - 1080p/720p and 18 - 360p
            console.log("Video downloading ->", urlYt);
            // reply("Downloading.. This may take upto 5 min!");
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            // Convert the file size to megabytes (optional)
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            console.log("Video downloaded ! Size: " + fileSizeInMegabytes);
            if (fileSizeInMegabytes <= 100) {
                client.sendMessage(
                    from, {
                        video: fs.readFileSync(`./${randomName}`),
                        caption: `${titleYt}`,
                    }, {
                        quoted: m
                    }
                );
            } else {
                reply(`File size big.`);
            }

            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            reply(e.toString())
        }
break;
            case 'style': case 'styletext': {
                if (!text) return reply('You sent nothing') //wont response when limit runs out\\

                let { styletext } = require('./lib/scraper')
                if (!text) return reply(`Enter Query Text!`)
                let anu = await styletext(text)
                let teks = `Entered Text ${text}\n\n`
                for (let i of anu) {
                    teks += `🔮 *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
            }
            break;

  case 'video':
        const getRandomm = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
        if (args.length === 0) {
            reply(` URL is empty! \nSend ${prefix}ytmp4 url`);
            return;
        }
        try {
            let urlYt = args[0];


            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= 1800) {
                reply(`Video file too big!`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandomm(".mp4");

            const stream = ytdl(urlYt, {
                    filter: (info) => info.itag == 22 || info.itag == 18,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            //22 - 1080p/720p and 18 - 360p
            console.log("Video downloading ->", urlYt);
            // reply("Downloading.. This may take upto 5 min!");
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            // Convert the file size to megabytes (optional)
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            console.log("Video downloaded ! Size: " + fileSizeInMegabytes);
            if (fileSizeInMegabytes <= 100) {
                client.sendMessage(
                    from, {
                        video: fs.readFileSync(`./${randomName}`),
                        caption: `${titleYt}`,
                    }, {
                        quoted: m
                    }
                );
            } else {
                reply(`File size big.`);
            }

            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            reply(e.toString())
        }
break;
          case "lyrics": 
 try { 
 if (!text) return reply("Provide a song name!"); 
 const searches = await Client.songs.search(text); 
 const firstSong = searches[0]; 
 //await client.sendMessage(from, {text: firstSong}); 
 const lyrics = await firstSong.lyrics(); 
 await client.sendMessage(from, { text: lyrics}, { quoted: m }); 
 } catch (error) { 
             reply(`I did not find any lyrics for ${text}. Try searching a different song.`); 
             console.log(error); 
         } 
 //const artist = await Client.artists.get(456537); 
 //await client.sendMessage(from, { text: artist} {quoted: m}); 
 // console.log("About the Artist:\n", artist, "\n"); 
 break ;

          case "song": { 
 const getRandom = (ext) => { 
   return `${Math.floor(Math.random() * 10000)}${ext}`; 
 }; 

 const downloadSong = async (randomName, query) => { 
   try { 
     const INFO_URL = "https://slider.kz/vk_auth.php?q="; 
     const DOWNLOAD_URL = "https://slider.kz/download/"; 
     let { data } = await axios.get(INFO_URL + query); 

     if (data["audios"][""].length <= 1) { 
       console.log("==[ SONG NOT FOUND! ]=="); 
       return { info: "NF" }; 
     } 


     let i = 0; 
     let track = data["audios"][""][i]; 
     while (/remix|revisited|mix/i.test(track.tit_art)) { 
       i += 1; 
       track = data["audios"][""][i]; 
     } 
     //if reach the end then select the first song 
     if (!track) { 
       track = data["audios"][""][0]; 
     } 


     let link = track.url; 
     link = encodeURI(link); //to replace unescaped characters from link 

     let songName = track.tit_art; 
     songName = 
       songName = 
       songName = 
         songName.replace(/\?|<|>|\*|"|:|\||\/|\\/g, ""); //removing special characters which are not allowed in file name 
     // console.log(link); 
     // download(songName, link); 
     const res = await axios({ 
       method: "GET", 
       url: link, 
       responseType: "stream", 
     }); 
     data = res.data; 
     const path = `./${randomName}`; 
     const writer = fs.createWriteStream(path); 
     data.pipe(writer); 
     return new Promise((resolve, reject) => { 
       writer.on("finish", () => resolve(songName)); 
       writer.on("error", () => reject); 
     }); 
   } catch (err) { 
     console.log(err); 
     return { info: "ERR", err: err.stack }; 
   } 
 }; 

 //const handler = async (client, msg, msgInfoObj) => { 
   //let { prefix, reply, args, from } = msgInfoObj; 

   if (args.length === 0) { 
     await reply(`Give me a song name?`); 
     return; 
   } 
   let randomName = getRandom(".mp3"); 
   let query = args.join("%20"); 
   let response = await downloadSong(randomName, query); 
   if (response && response.info == "NF") { 
     await reply( 
       `Not found!` 
     ); 
     return; 
   } 
   if (response && response.info === "ERR") { 
     await reply(response.err); 
     return; 
   } 
   console.log(`song saved-> ./${randomName}`, response); 

   await client.sendMessage( 
     from, 
     { 
       document: fs.readFileSync(`./${randomName}`), 
       fileName: response + ".mp3", 
       mimetype: "audio/mpeg", 
       mediaUploadTimeoutMs: 1000 * 30, 
     }, 
     { quoted: m } 
   ); 
   fs.unlinkSync(`./${randomName}`); 
    } 
        
          case "sc": case "script": case "scbot":
           m.reply("I am not yet on github. Maybe my owner will publish my source soon...");
          break;
case "getvar": 
 if (!Owner) throw NotOwner;  
     const heroku = new Heroku({  
         token: herokuapi, // Replace 'heroku' with your actual Heroku token 
     });  
     let baseUR = "/apps/" + appname;  
     let h9 = await heroku.get(baseUR + '/config-vars');  
     let stoy = '*InfinityAI Variables*\n\n';  
     for ( vrt in h9) { // Added 'const' to declare 'vr' 
         stoy += vrt + '=' + h9[vrt] + '\n\n'; // Fixed variable name 'str' to 'sto' 
     }  
     reply(stoy); 

     break; 
 case "setvar": 
 if (!Owner) throw NotOwner;  
 if(!text.split('=')[1]) return reply('Incorrect Usage:\nProvide the key and value correctly\nExample: setvar AUTOVIEW_STATUS=TRUE')  
 const herok = new Heroku({  
            token: herokuapi,  
          });  
          let baseURI = "/apps/" + appname;  
 await herok.patch(baseURI + "/config-vars", {  
            body: {  
                    [text.split('=')[0]]: text.split('=')[1],  
            },  
 });  
          await reply(`✅ The variable ${text.split('=')[0]} = ${text.split('=')[1]} has been set Successfuly.\nWait 20s for changes to effect!`);  



 break
        default: {
          if (isCmd2 && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith("broadcast")) return;
            if (m.isBaileys) return;
            if (!budy.toLowerCase()) return;
            if (argsLog || (isCmd2 && !m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));
            } else if (argsLog || (isCmd2 && m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));
            }
          }
        }
      }
    }
  } catch (err) {
    m.reply(util.format(err));
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});