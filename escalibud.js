
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys");
const fs = require("fs");
const util = require("util");
const speed = require("performance-now");
const os = require('os');
const chalk = require("chalk");
const { exec, spawn, execSync } = require("child_process");
const Genius = require("genius-lyrics"); 
const yts = require("yt-search");
const acrcloud = require ('acrcloud');
const ytdl = require("ytdl-core");
const advice = require("badadvice");
const moment = require('moment-timezone');
const {c, cpp, node, python, java} = require('compile-run');
const githubstalk = require('./lib/githubstalk');
const axios = require('axios');
const { getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc');
let { TelegraPh, UploadFileUgu, webp2mp4File } = require('./lib/uploader');
const prem = JSON.parse(fs.readFileSync('./database/premium.json'));
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'));
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const verifieduser = JSON.parse(fs.readFileSync('./database/user.json'));
let _registered = JSON.parse(fs.readFileSync('./database/registered.json'));
let register = JSON.parse(fs.readFileSync('./database/registered.json'));
const setik = JSON.parse(fs.readFileSync('./database/setik.json'));
const vien = JSON.parse(fs.readFileSync('./database/vien.json'));
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'));
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
    const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
const acr = new acrcloud({
    host: 'identify-eu-west-1.acrcloud.com',
    access_key: 'c33c767d683f78bd17d4bd4991955d81',
    access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
});
 const Client = new Genius.Client("jKTbbU-6X2B9yWWl-KOm7Mh3_Z6hQsgE4mmvwV3P3Qe7oNa9-hsrLxQV5l5FiAZO"); // Scrapes if no key is provided

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

module.exports = escalibud = async (client, m, chatUpdate, store) => {
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
    //var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";
    const prefix = process.env.PREFIX || '';
    const isCmd2 = body.startsWith(prefix);
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
const Heroku = require("heroku-client");  
 const appname = process.env.APP_NAME || '';
 const herokuapi = process.env.HEROKU_API;    
const author = process.env.STICKER_AUTHOR || 'KRESSWELL';
    const packname = process.env.STICKER_PACKNAME || 'InfinityAI';

    const kress = (m.quoted || m); 
         const quoted = (kress.mtype == 'buttonsMessage') ? kress[Object.keys(kress)[1]] : (kress.mtype == 'templateMessage') ? kress.hydratedTemplate[Object.keys(kress.hydratedTemplate)[1]] : (kress.mtype == 'product') ? kress[Object.keys(kress)[0]] : m.quoted ? m.quoted : m; 
    const mime = (quoted.msg || quoted).mimetype || "";
            const qmsg = (quoted.msg || quoted);
  
      
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    let text = (q = args.join(" "));
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
const wapresence = process.env.WA_PRESENCE || 'recording';
    const autoread = process.env.AUTOREAD || 'TRUE';
const autobio = process.env.AUTOBIO || 'TRUE';
const dev = process.env.OWNER || '254798242085'

    const from = m.chat;
   const isRegister = register.includes(m.sender);
const isPrem = prem.includes(m.sender);
    	const isUser = verifieduser.includes(m.sender);
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];
    const getGroupAdmins = (participants) => { 
       let admins = []; 
       for (let i of participants) { 
         i.admin === "superadmin" ? admins.push(i.id) : i.admin === "admin" ? admins.push(i.id) : ""; 
       } 
       return admins || []; 
     };

const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hours, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minutes, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Seconds") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 

 const timestamp = speed(); 
   const infinityspeed = speed() - timestamp 

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
    const isBanchat = m.isGroup ? bancht.includes(from) : false;
    const isNsfw = m.isGroup ? nsfw.includes(from) : false;
      const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false;
const admin = process.env.ADMIN_MSG || 'Admin Command Only';
    const group = process.env.GROUP_ONLY_MSG || 'Use this command only in groups!!';
    const botAdmin = process.env.BOT_ADMIN_MSG || 'I need to be admin to perform that task'
    const NotOwner = process.env.NOT_OWNER_MSG || 'Owner Command';

//Bot status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                        return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
                        last.speed += cpu.speed / length
                        last.times.user += cpu.times.user
                        last.times.nice += cpu.times.nice
                        last.times.sys += cpu.times.sys
                        last.times.idle += cpu.times.idle
                        last.times.irq += cpu.times.irq
                        return last
        }, {
            speed: 0,
                        total: 0,
                        times: {
                            user: 0,
                            nice: 0,
                            sys: 0,
                            idle: 0,
                            irq: 0
            }
        })

async function loading () {
var Ayushlod = [
"`I`",
"`N`",
"`F`",
"`I`",
"`N`",
"`I`",
"`T`",
"`Y`",
"` `",
"`A`",
"`I`",
"`INFINITY-AI...`",
]
let { key } = await client.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < Ayushlod.length; i++) {
await client.sendMessage(from, {text: Ayushlod[i], edit: key });
}
}
 ///antilink 
 if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmin) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nyou are a group admin thats why i wont kick you, but remember from next time`
if (isAdmin) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (Owner) return reply(bvl)
        await client.sendMessage(m.chat,
                            {
                                delete: {
                                    remoteJid: m.chat,
                                    fromMe: false,
                                    id: m.key.id,
                                    participant: m.key.participant
                                }
                            })
                        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
client.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
  let smallinput = budy.toLowerCase()


async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return reply('Enter your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const mariayresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: '𓄂ᴋ͟ʀ͟ᴇͥ͟sͣ͟sͫ͟ᴡ͟ᴇ͟ʟ͟ʟ͟',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            mariayresult.push(result)
        }
    resolve(mariayresult)
    })
}
        //TicTacToe
            this.game = this.game ? this.game : {}
            let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
            if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) { // nek wayahku
            if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
            m.reply({
            '-3': 'Game telah berakhir',
            '-2': 'Invalid',
            '-1': 'Invalid Position',
            0: 'Invalid Position',
            }[ok])
            return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            if (isSurrender) {
            room.game._currentTurn = m.sender === room.game.playerX
            isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Wins!!🥳` : isTie ? `Game Tie` : `Current Player: ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
            room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) await client.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await client.sendText(room.o, str, m, { mentions: parseMention(str) } )
            if (isTie || isWin) {
            delete this.game[room.id]
            }
            }
 const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./escalibud.jpg')}}}
//══════════[ Automatic Reply ]══════════//

for (let anji of setik){
                                if (budy === anji){
                                        result = fs.readFileSync(`./media/sticker/${anji}.webp`)
                                        client.sendMessage(from, result, sticker, { quoted: mek})
                                        }
                        }
                        for (let anju of vien){
                                if (budy === anju){
                                        result = fs.readFileSync(`./media/vn/${anju}.mp3`)
                                        client.sendMessage(from, result, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek})
                                        }
                        }
                        for (let anjh of imagi){
                                if (budy === anjh){
                                        result = fs.readFileSync(`./media/image/${anjh}.jpg`)
                                        client.sendMessage(from, result, image, { quoted: mek})
                                        }
                                  }

//******************* 》banchat《 ********************\\
if (isBanchat){
if (!itsMe && !Owner)return 
}
if (wapresence === 'recording' && !m.isGroup) { 

  client.sendPresenceUpdate('recording', m.chat);
} else if (wapresence === 'typing' && !m.isGroup) { 

  client.sendPresenceUpdate('composing', m.chat);
    }
    if (autoread === 'TRUE' && !m.isGroup) { 
             client.readMessages([m.key])
    }

    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;


if (budy.toLowerCase() === `register`){
            if (isRegister) return 
                    register.push(sender)
                   
                    fs.writeFileSync('./database/registered.json', JSON.stringify(register))
                    regmess = `Verification success\n\nPlease send menu to view menu`;
                    client.sendMessage(from, regmess, text, { quoted: fkontak})
}          /*if (!mek.key.fromMe && banChats === false) return*/


const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }

const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)


if (!client.public) {
if (!m.key.fromMe) return
}
if (smallinput=='kresswell') {
    reply ('Kresswell is my Father!!')
}
if (smallinput=='why are you gay') {
    reply ('You should ask your father that question😂😂💀')
}
if (smallinput=='infinity ai') {
    reply('Hey,Thats me,Do you have a crush on me or what do you want??')
}
if (smallinput=='infinity hackers') {
    reply ('That is my Home,I belong to Infinity Hackers,Led By Spider and Kresswell🥳2 Giants. You can also be part by Joining us on Telegram. Click this Link. https://t.me/InfinityHackersKE')
}
if (smallinput=='sorry') {
    reply ('I knew you were weak ,Just like your father😂😂💀')
}
if (smallinput=='umbwa') {
    reply ('rudia bila kulia sasa😂😂')
}
if (smallinput=='love') {
    reply ('Lemme Ask for permission from Kresswell🤭')
}
if (smallinput.includes('thanks')|| smallinput.includes('arigatou') || smallinput.includes('cute')) {
  reply (`Mention not ${pushname} 😇. I am a bot afterall.`);
}
//chat counter (console log)
        if (m.message && m.isGroup) {
            client.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Group Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            client.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Private Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
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
          let caption= `

*┏━──●★𓆩ᗴᏕᑕᗩᒪI ᗷᑌᗪ𓆪★●───*
*┃➥ Howdy ${m.pushName}*
*┃➥ Runtime: ${runtime(process.uptime())}*
*┃➥ Library : Baileys*
*┃➥ Host Name : ${os.hostname()}*
*┃➥ Platform : ${os.platform()}*
*┃➥ Bot Name : InfinityAI*
*┃➥ Owner : 𓄂ᴋ͟ʀ͟ᴇͥ͟sͣ͟sͫ͟ᴡ͟ᴇ͟ʟ͟ʟ͟*
*┃➥ Advice: ${advice()}*
*┗━──────────────*

▬▬▬✮✮★𓆩Ｕｓｅｒ Ｉｎｆｏ𓆪★✮✮▬▬▬

*┏━───────────────╮*
*┃Name :${m.pushName}*
*│Premium : ${isPrem ? '✅' : `❌`}*
*┗━───────────────╯*

*⌜ Owner Commands ⌟*
*┏━───────────────╮*
*┃➥Setvar*
*┃➥Getvar*
*┃➥Restart*
*┃➥Botpp*
*┃➥Admin*
*┃➥Block*
*┃➥Unblock*
*┃➥Join*
*┃➥Eval*
*┃➥Addprem*
*┃➥Delprem*
*┃➥Banchat*
*┃➥Unbanchat*
*┃➥Broadcast*
*┃➥Broadcastimg*
*┃➥Broadcastvid*
*┗━───────────────╯*

*⌜ Admin Commands ⌟*

*┏━───────────────╮*
*┃➥Promote*
*┃➥Demote*
*┃➥Kick*
*┃➥Add*
*┃➥revoke*
*┃➥Delete*
*┃➥Gpp*
*┃➥Subject*
*┃➥Hidetag*
*┃➥Tagall*
*┃➥Mute*
*┃➥Unmute*
*┃➥Closein*
*┃➥Openin*
*┃➥Nsfw*
*┃➥Antilink*
*┗━───────────────╯*


*⌜ Downloader & Media ⌟*

*┏━───────────────╮*
*┃➥play*
*┃➥Yts*
*┃➥Yta*
*┃➥ytmp4*
*┃➥Ytmp3*
*┃➥YTV*
*┃➥Lyrics*
*┃➥Song*
*┃➥Gitclone*
*┃➥Tovv*
*┃➥Qoutely*
*┃➥Igvideo*
*┃➥APK*
*┗━───────────────╯*

*⌜ Sticker Menu ⌟*

*┏━───────────────╮*
*┃➥Sticker*
*┃➥Take*
*┃➥Smeme*
*┃➥Quotely*
*┃➥Tgs*
*┗━───────────────╯*

*⌜ Utilities ⌟*

*┏━───────────────╮*
*┃➥Alive*
*┃➥Ping*
*┃➥Runtime*
*┃➥Speed*
*┃➥Link*
*┗━───────────────╯*


*⌜ Temp Mails⌟*
*┏━───────────────╮*
*┃➥Mail*
*┃➥checkmail*
*┗━───────────────╯*

*⌜ AI & Search Commands ⌟*

*┏━───────────────╮*
*┃➥Gpt*
*┃➥Dalle*
*┃➥Google*
*┃➥Github*
*┃➥Truecaller*
*┗━───────────────╯*

*⌜ Games And Fun ⌟*

*┏━───────────────╮*
*┃➥ttt*
*┃➥delttt*
*┃➥Styletext*
*┗━───────────────╯*

*⌜ Programming ⌟*

*┏━───────────────╮*
*┃➥Compile-py*
*┃➥Compile-c*
*┃➥Compile-c++*
*┃➥Compile-js*
*┃➥Enc*
*┗━───────────────╯*

*⌜ 🔞 NSFW 🔞 ⌟*
*┏━───────────────╮*
*┃➥Xnxxsearch*
*┃➥Xnxxdl*
*┗━───────────────╯*

▬▬▬✮✮★𓆩ᗴᏕᑕᗩᒪI ᗷᑌᗪ𓆪★✮✮▬▬▬
 `;
loading ();
client.sendMessage(m.chat, {
                        text: caption,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `EscaliBud`,
                                body: `Ain't Nothing But A G Thang!! ◇.`,
                                thumbnail: fs.readFileSync('./escalibud.jpg'),
                                sourceUrl: `https://whatsapp.com/channel/0029VaByn0u5PO0wZ94WMX2e`,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
          break;
case 'tgs':{
                if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
                let mariaresources = await Telesticker(args[0])
                await reply(`Sending ${mariaresources.length} stickers...`)
                if (m.isGroup && mariaresources.length > 30) {
                        await reply('Number of stickers more than 30, bot will send it in private chat.')
                        for (let i = 0; i < mariaresources.length; i++) {
                                client.sendMessage(m.sender, { sticker: { url: mariaresources[i].url }})
                        }
                } else {
                        for (let i = 0; i < mariaresources.length; i++) {
                                client.sendMessage(m.chat, { sticker: { url: mariaresources[i].url }})
                        }
                }
        } else reply(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break;
   /* case 'qr': case 'scanner': case 'qrcode':
      if (!m.isGroup) return reply('This is to be used only in groups');
client.sendMessage(from, { react: { text: "📶" , key: m.key }})

  reply(`Running repl....Please wait until repl.it responds...`)                                                
  var replqr =  await getBuffer(`https://replit.com/@KresswellKE/InfinityAIPairing?v=1`)
                     
        let bmffg = {
         image: replqr,
         caption:  `Scan the qr within 10-15 seconds...`,
   
        }     
              await client.sendMessage(m.chat, bmffg,{ quoted:m }).catch(err => {
                      return('Error!')
                  })
  break;*/
             
case 'mp3':  case'audio': {
client.sendMessage(from, { react: { text: "📥", key: m.key }}) 
if (!text) return reply(`Example : ${prefix + command} BG Knocc Out Compton Hoe`)
const infinitymp3 = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let escali = search.videos[0]
const pl= await infinitymp3.mp3(escali.url);
reply('```✅ Song found! Sending...```');
await client.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: escali.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:`INFINITY-AI`,
            body: `By Infinity Hackers Kenya`,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:escali.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break;  
case 'poll': {
           if (!m.isGroup) throw group
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await reply(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Kresswell,Spider,ZzeroMind...`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await client.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break;
     case "sticker": case "s": { 
            if (/image/.test(mime)) { 

                 let media = await client.downloadMediaMessage(qmsg); 
                 let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: packname, author: author }); 
                 await fs.unlinkSync(encmedia); 
             } else if (/video/.test(mime)) { 
             m.reply("wait a moment"); 
                 if (qmsg.seconds > 11) return m.reply('Video is too long for conversion!'); 
                 let media = await client.downloadMediaMessage(qmsg); 
                 let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: packname, author: author }); 
                 await fs.unlinkSync(encmedia); 
             } else { 
                 m.reply(`Send an image or short video with the caption ${prefix + command}`); 
                 } 
          }
          break;
case "advice":
reply(advice());
console.log(advice());

break;

case 'whatmusic': case 'find': case 'shazam':
    if (!m.quoted) {
        reply('You asked about music. Please provide a quoted audio or video message for identification.');
    } else if (/audio|video/.test(mime)) {
        try {
            let media = await m.quoted.download();
            const ext = mime.split('/')[1];
            fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media);

            reply('Infinity AI Shazam Is fetching data about the song,Please wait');

            const res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`));
            const { code, msg } = res.status;

            if (code !== 0) {
                throw msg;
            }

            const { title, artists, album, genres, release_date } = res.metadata.music[0];
            const txt = `
                        𝚁𝙴𝚂𝚄𝙻𝚃
                • 📌 *TITLE*: ${title}
                • 👨‍🎤 𝙰𝚁𝚀𝚃𝙸𝚂𝚃: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'NOT FOUND'}
                • 💾 𝙰𝙻𝙱𝚄𝙼: ${album.name || 'NOT FOUND'}
                • 🌐 GENRE: ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'NOT FOUND'}
                • 📆 RELEASE DATE: ${release_date || 'NOT FOUND'}
            `.trim();

            fs.unlinkSync(`./tmp/${m.sender}.${ext}`);
            reply(txt);
        } catch (error) {
            console.error(error);
            reply('An error occurred during music identification.');
        }
    }
    break;
case 'imagine': case 'aiimage':
  if (!text) throw `*You can generate images From text using this command*\n\n*𝙴xample usage*\n*◉ ${prefix} imagine Beautiful animegirl*\n*◉ ${prefix} imagine Elon musk with Iron man*`; 

async function fetchImageData() {
  let thingMsg = await client.sendMessage(m.chat, { text: 'Generating Images Please wait...' });
  const texti = text;
  try {
    const response = await axios.get(`https://v2-guru-indratensei.cloud.okteto.net/scrape?query=${texti}`);
    const data = response.data;

    const images = data.image_links;
    const timeforgen = data.execution_time;
    const genetd =  `✅ Sucsessfully generated in ${timeforgen}`
    const randomImageIndex = Math.floor(Math.random() * images.length);
    const randomImageLink = images[randomImageIndex];
    console.log(randomImageLink);
    await gss.sendMessage(m.chat, {
        image: {
          url: randomImageLink,
        },
        caption: genetd,
      }, {
        quoted: m,
      });
  } catch (error) {
    console.error('Error fetching image data:', error);
  }
}

fetchImageData();

break;

            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Tag a sticker with the caption *${prefix + command}*`
                m.reply('Please wait......')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    client.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break;
            case 'smeme': {
                let responnd = `Quote an image or sticker with the 2 texts separated with |`
                if (!/image/.test(mime)) return reply(responnd)
                if (!text) return reply(responnd)

                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await client.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await client.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,

                })
                fs.unlinkSync(pop)
            }

break;
         case 'pinterest':
      case 'pin': {
      if (!args.join(" ")) return reply(`${pushname} Please provide a search term!`);
        reply('Please wait')
        let { pinterest } = require('./lib/scraper');
        let anutrest = await pinterest(text);
        let results = [];

        // Get multiple random images (let's say 5 images)
        const numImages = 5;
        for (let i = 0; i < numImages && i < anutrest.length; i++) {
          results.push(anutrest[Math.floor(Math.random() * anutrest.length)]);
        }

        // Send each image without any caption
        for (let i = 0; i < results.length; i++) {
         client.sendMessage(m.chat, { image: { url: results[i] } }, { quoted: m });
        }
      }
        break;
case 'welcome': {
if (/on/.test(text)) {
 if (global.welcome) {
   m.reply("Already activated");
 } else {
 global.welcome = true;
m.reply("Activated welcome message");
}
} else if (/off/.test(text)) {
if (!global.welcome) {
   m.reply("Already deactivated");
 } else {
 global.welcome = false;
m.reply("Deactivated welcome message");
}
} else m.reply(`Type ${prefix+command} on|off`);
}
break;  
case 'hacked':{
  if (!mek.key.fromMe) return;
              if (!isGroup) return reply('this feature is only for groups')
              if (args.length < 1) return reply('The text?')
              reply('Hacking')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   client.updateProfilePicture (from, tessgc)
                   await sleep(1000)
              client.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                client.groupUpdateDescription(from, `_${pushname} hacked this group_`)             
                await sleep(1000)
                client.sendMessage(from, 'Succes Hacked', text, {quoted: fyt})
}
break;
  
  case 'quotely': {
try {
if (!m.quoted.text) throw 'Tag a text';
let xf = m.quoted.text;

                const {
                    quote
                } = require('./lib/infinityquotely.js')

                let pppuser = await client.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/75272825615a4dcb69526.png')

const rel = await quote(xf, pushname, pppuser)

                client.sendImageAsSticker(m.chat, rel.result, m, {
                    packname: pushname,
                    author: `𓄂ᴋ͟ʀ͟ᴇͥ͟sͣ͟sͫ͟ᴡ͟ᴇ͟ʟ͟ʟ͟`
                })

} catch (errr) { 
 await reply("Tag some text for quotely")}

            }

break;
case 'apk':
case 'apkdl':{
if (!text) return reply("What apk u wanna download?")
let resMaria = await fetch(`https://vihangayt.me/download/apk?id=${text}`)
let jsonMaria = await resMaria.json()
client.sendMessage(from, { document: { url: jsonMaria.data.dllink}, fileName : jsonMaria.data.name, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
.catch(console.error)
}
break;

//owner commands
case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST OF PERSONAL CHATS*\n\nTotal Chat : ${anu.length} Chats\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Name :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 client.sendTextWithMentions(m.chat, teks, m)
             }
             break;
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let teks = `⬣ *LIST OF GROUP CHATS*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await client.groupMetadata(i)
                     teks += `⬡ *Name :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Created on :* ${moment(metadata.creation * 1000).tz('Africa/Nairobi').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Members :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 client.sendTextWithMentions(m.chat, teks, m)
             }
             break;
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    client.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break;
case 'add': {
                if (!m.isGroup) throw group
                if (!isBotAdmin) throw botAdmin
                if (!isAdmin) throw admin
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await client.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        }
        break;
          case "revoke": 
 case "newlink": 
 case "reset": { 
   if (!m.isGroup) throw group; // add "new Error" to create a new Error object 
   if (!isAdmin) throw admin; // add "new Error" to create a new Error object 
   if (!isBotAdmin) throw botAdmin; // add "new Error" to create a new Error object 
   await client.groupRevokeInvite(m.chat); 
   await client.sendText(m.chat, 'Group link revoked!', m); // use "client.sendText" instead of "m.reply" to ensure message is sent 
   let response = await client.groupInviteCode(m.chat); 
 client.sendText(m.sender, `https://chat.whatsapp.com/${response}\n\nHere is the new group link for ${groupMetadata.subject}`, m, { detectLink: true }); 
 client.sendText(m.chat, `Sent  the new group link to your inbox!`, m); 
   // use "client.sendTextWithMentions" instead of "client.sendText" to include group name in message 
 }

  break;
case 'addprem':
if (!Owner) return reply('You are not my Owner')
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 254754046165`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await client.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`The Number ${prrkek} Has Been Premium!`)
break;
case 'delprem':
if (!Owner) return reply('You are not My Owner')
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 254754046165`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`The Number ${ya} Has Been Removed Premium!`)
break;
case 'public': {
                if (!Owner) return reply('You are Not my owner')
                client.public = true
                reply('*Successful in Changing To Public Usage*')
            }
            break;
case 'true':
case 'truecaller':
  try {
    if (!text) {
      // Reply when no phone number is provided
    return  reply ('Please provide a phone number.');
      break;
    }

    const installationId = 'a1i0g--k3toNiVP-9swCenahQhhokTiqfXRFw2LossLOsZLDh3P-fLD0b75S8iF7';
    const apiUrl = `https://sid-bhai.vercel.app/api/truecaller?phone=${encodeURIComponent(text)}&id=${installationId}`;

    let response = await axios.get(apiUrl);
    console.log(response);
    let json = response.data;

    const { name, alternateName, addresses, email, countryDetails } = json;

    let info = `╭––『 *Phone Detail* 』\n`;
    info += `┆ ⚝ *Name:* ${name}\n`;

    if (addresses && addresses.length > 0) {
      info += `┆ ⚝ *Address:* ${addresses[0].city}, ${addresses[0].countryCode}\n`;
      info += `┆ ⚝ *Time Zone:* ${addresses[0].timeZone}\n`;
      info += `┆ ⚝ *Pin Code* ${addresses[0].zipCode}\n`;
      info += `┆ ⚝ *Street* ${addresses[0].street}\n`;
    }

    info += `┆ ⚝ *Email:* ${email}\n`;
    info += `╰–––––––––––––––༓\n`;

    if (countryDetails) {
      info += `╭––『 *countryDetails* 』\n`;
      info += `┆ ⚝ *Name:* ${countryDetails.name}\n`;
      info += `┆ ⚝ *Native:* ${countryDetails.native}\n`;
      info += `┆ ⚝ *Phone Code:* +${countryDetails.phone[0]}\n`;
      info += `┆ ⚝ *Continent:* ${countryDetails.continent}\n`;
      info += `┆ ⚝ *Capital:* ${countryDetails.capital}\n`;
      info += `┆ ⚝ *Currency:* ${countryDetails.currency.join(', ')}\n`;
      info += `┆ ⚝ *Languages:* ${countryDetails.languages.join(', ')}\n`;
      info += `┆ ⚝ *Flag:* ${countryDetails.flag}\n`;
      info += `╰–––––––––––––––༓`;
    }

    await client.sendMessage(m.chat, {
      text: info,
    }, {
      quoted: m,
    });

  } catch (error) {
    console.error(error);
  }
  break;
case 'tempmail':
    const option = ['.mail 1','.mail 3','.mail 5'];
    client.sendPoll(m.chat, 'Select your mail:', option);
    break;



case 'tempmail': case 'mail': {
  const maxEmails = 10;
  const count = Math.min(parseInt(args[0]) || 1, maxEmails); // Parse the provided argument as a number, default to 1
  const baseUrl = `https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=${count}`;
  const timeout = 10000; // 10 seconds timeout for Axios requests

  try {
    const response = await axios.get(baseUrl);
    const data = response.data;

    if (data && data.length > 0) {
      const tempMails = data.join('\n');
      const replyMessage = `*Temporary Email Addresses:*\n\n${tempMails}`;
      reply(replyMessage);
    } else {
      reply(`Failed to generate ${count} temporary email address(es).`);
    }
  } catch (error) {
    console.error('Error:', error);
    reply('Failed to fetch temporary email addresses.');
  }
  break;
}
case 'checkmail': {
  if (!text) {
    reply('Please provide an email address to read the most recent message.');
    break;
  }

  // Split the provided email address into login and domain
  const [login, domain] = text.split('@');

  // Check if the email address was split correctly
  if (!login || !domain) {
    reply('Invalid email address format.');
    break;
  }

  const baseUrl = 'https://www.1secmail.com/api/v1/?action=getMessages';

  // Use the extracted login and domain values
  const url = `${baseUrl}&login=${login}&domain=${domain}`;

  const timeout = 10000; // 10 seconds timeout for Axios requests

  try {
    const response = await axios.get(url, { timeout });
    const data = response.data;

    if (data && data.length > 0) {
      // Extract the latest message ID
      const latestMessageId = data[0].id;

      // Use the latest message ID to read the message
      const readUrl = `https://www.1secmail.com/api/v1/?action=readMessage&login=${login}&domain=${domain}&id=${latestMessageId}`;

      const readResponse = await axios.get(readUrl, { timeout });
      const messageData = readResponse.data;

      if (messageData && messageData.textBody) {
        const sender = messageData.from;
        const date = messageData.date;
        const subject = messageData.subject || 'No Subject';

        const replyMessage = `*Message in* ${text}:\n\n*From:* ${sender}\n*Subject:* ${subject}\n*Date:* ${date}\n\n*Messages:*\n\n${messageData.textBody}`;
        reply(replyMessage, m.from, { caption: replyMessage });

      } else {
        reply(`No message found in ${text}.`);
      }
    } else {
      reply(`No messages found in ${text}.`);
    }
  } catch (error) {
    console.error('Error:', error);
    reply(`Failed to read the most recent message in ${text}.`);
  }
  break;
}
            case 'self': {
                if (!Owner) return reply('You are not my Owner')
                 client.public = false
                reply('*Successful in Changing To Self Usage*')
            }
            break;
case 'chatgpt': case 'gpt':{
client.sendMessage(from, { react: { text: "🛸", key: m.key }}) 
              if (!q) return reply(`Please provide a text query. Example: ${prefix + command} Hello, ChatGPT!`);

              const apiUrl1 = `https://vihangayt.me/tools/chatgpt?q=${encodeURIComponent(q)}`;
              const apiUrl2 = `https://gurugpt.cyclic.app/gpt4?prompt=${encodeURIComponent(q)}&model=llama`;

              try {

                const response1 = await fetch(apiUrl1);
                const responseData1 = await response1.json();

                if (response1.status === 200 && responseData1 && responseData1.status === true && responseData1.data) {

                  const message = responseData1.data;
                  const me = m.sender;
                  await client.sendMessage(m.chat, { text: message, mentions: [me] }, { quoted: m });
                } else {

                  const response2 = await fetch(apiUrl2);
                  const responseData2 = await response2.json();

                  if (response2.status === 200 && responseData2 && responseData2.data) {

                    const message = responseData2.data;
                    const me = m.sender;
                    await client.sendMessage(m.chat, { text: message, mentions: [me] }, { quoted: m });
                  } else {
                    reply("Sorry, I couldn't fetch a response from both APIs at the moment.");
                  }
                }
              } catch (error) {
                console.error(error);
                reply("An error occurred while fetching the response from both APIs.");
              }
            }
              break;
             case 'dalle': {


        if (!q) return reply(`Please provide a query to generate an image. Example: ${prefix + command} Beautiful landscape`);

        const apiUrl = `https://gurugpt.cyclic.app/dalle?prompt=${encodeURIComponent(q)}`;

        try {
          await client.sendMessage(m.chat, { image: { url: apiUrl } }, { quoted: m });
        } catch (error) {
          console.error(error);
          reply("An error occurred while generating the image.");
        }
      }
        break;
case 'voiceai': case 'vgpt':
      if (!text) {
        await reply(`*You can use the Voice AI command with text to get a spoken response.*\n\n*Example usage:*\n*◉ ${prefix} voiceai Tell me a joke.*`);
        break;
      }

      try {
        const apiEndpoint = `https://matrix-coder.vercel.app/api/gpt?query=${encodeURIComponent(text)}`;
        let response = await axios.get(apiEndpoint);
        let responseData = response.data;

        if (responseData.result) {
          const result = responseData.result;
          const speechURL = `https://matrix-coder.vercel.app/api/gpt?query=${encodeURIComponent(result)}`;
          await client.sendMessage(m.chat, {
            audio: {
              url: speechURL,
            },
            mimetype: 'audio/mp4',
            ptt: true,
            fileName: `${text}.mp3`,
          }, {
            quoted: m,
          });
        } else {
          console.log('API returned an unexpected response:', responseData);
        }
      } catch (error) {
        console.error(error);
      }
      break;
case 'tourl': {
                m.reply('Please wait...')
                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break;
                                        // add respond
                                        case 'addresponse':
                        if (!Owner && !mek.key.fromMe) return reply('Only owner can use this feature')
                                if (args.length < 1) return reply(`Use ${prefix}addresponse Hi|Hi too`)
                                argz = arg.split('|')
                                if (checkCommands(argz[0], commandsDB) === true) return reply(`Already there`)
                                addCommands(argz[0], argz[1], sender, commandsDB)
                                reply(`Successful adding response ${argz[0]}`)
                                break
                                case 'delresponse':
                        if (!Owner && !mek.key.fromMe) return reply('Only owner can use this feature')
                                if (args.length < 1) return reply(`Use ${prefix}delrespond hi`)
                                if (!checkCommands(body.slice(11), commandsDB)) return reply(`Not in my database`)
                deleteCommands(body.slice(11), commandsDB)
                                reply(`Successfully deleted response ${body.slice(11)}`)
                                break
                                case 'respondlist':
if (!isPrem) return reply('This is a premium command')
      
teks = `\`\`\`「 LIST RESPON  」\`\`\`\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Ask:* ${commandsDB[i].pesan}\n`
teks += `❏ *Reply:* ${commandsDB[i].balasan}\n`
teks += `❏ *Creator:* ${commandsDB[i].creator}\n\n`
}
reply(teks)
break 

        // banchat fixed by xeon
case 'banchat':
if (!m.isGroup) return reply('this feature is only for groups')
if (!itsMe && !Owner && !isAdmin)return mentions(`*This Order is Specially for owner @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
//if (!isBotGroupAdmin) return reply('You are not an admin')
if (isBanchat) return reply(`already banned`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Successful bot Ban on this group`)
break

case 'unbanchat':
if (!itsMe && !Owner)return reply('Only owner can use this feature')
if (!isBanchat) return reply(`Already at UnBan`)
let ubc = bancht.indexOf(from)
bancht.splice(ubc, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`The bot has been unbanned in this group`)
break;

case 'listbanchat': case 'listbc':
 teks = `*List Banchat Group!*\n_Total : ${bancht.length}_\n\n`
for(let i of bancht){
met = await client.groupMetadata(i)
teks += 'Id : ' + i + '\n'
teks += 'Nama Group : ' + met.subject + '\n\n'
}
reply(teks)
break;
case 'img': {

       if (!text) return reply('Example : ${prefix + command} Snoop Dogg'
)
let escalibudimg ="https://api.akuari.my.id/search/googleimage?query=${text}";
        xeonezyanu = await fetchJson(escalibudimg)

        n = xeonezyanu.result

        images = n[Math.floor(Math.random() * n.length)]

let kressimg=`*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}}`;
                client.sendMessage(m.chat, { image: { url: images}, caption: kressimg}, { quoted: m })
        }

        break;
case 'openin': {
if (!m.isGroup) return reply('Group Command')
if (!isAdmin) return reply('Are you an Admin??')
if (!isBotAdmin) return reply('Foolish,,Are you a Bot Admin')
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`
client.groupSettingUpdate(from, 'not_announcement')
reply(open)
}, timer)
}
break;
case 'closein': {
if (!m.isGroup) return reply('Group Command')
if (!isAdmin) return reply('Admin Command')
if (!isBotAdmin) return reply('Bot Admin Command')
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
client.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
}
break;
                            case 'broadcastig': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if(!Owner) throw NotOwner;
        if (!q) return reply(`Enter text`)
        let getGroups = await client.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        reply(` Broadcasting in ${xeoncast.length} Group Chat, in ${xeoncast.length * 1.5} seconds`)
        for (let i of xeoncast) {
let txt = `${ownername}'s Broadcast\n\nMessage : ${q}`
if(/image/.test(mime)) {
let media = await quoted.download()
await client.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await client.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        reply(`Successfuly Broadcasted in ${xeoncast.length} Groups`)      
        break;
case 'tovv': case 'toviewonce': { 
if (!quoted) return reply(`Reply Image/Video`)
if (/image/.test(mime)) {
anuan = await client.downloadAndSaveMediaMessage(quoted)
client.sendMessage(m.chat, {image: {url:anuan}, caption: `Here you go!`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await client.downloadAndSaveMediaMessage(quoted)
client.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Here you go!`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break;
case 'ig': {
if (!isRegistered) return reply('To use this bot,you must be registered!!\nRegister by sending .register')
if (!args[0]) return reply('Enter Instagram Username\n\nExample: ${prefix + command} Kresswell0')
const fg = require('api-dylux')
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await client.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
      } catch {
        reply('Make sure the username comes from *Instagram*')
      }
}
break;
 case "hidetag": { 
             if (!m.isGroup) throw group; 
             if (!isBotAdmin) throw botAdmin; 
             if (!isAdmin) throw admin; 
            client.sendMessage(m.chat, { text : q ? q : '☞︎︎︎ YOU ARE TAGGED ☜︎︎︎' , mentions: participants.map(a => a.id)}, { quoted: m }); 
             } 
 break; 
 case "tagall": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
 let teks = `You have been tagged here: 
   
  Message ${q ? q : ''}*\n\n`; 
                 for (let mem of participants) { 
                 teks += `🍷 @${mem.id.split('@')[0]}\n`; 
                 } 
                 client.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m }); 
                 } 
 break;

          case "block": { 
 if (!Owner) throw NotOwner; 
 if (!m.quoted) throw `Tag someone!`; 
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' 
 await client.updateBlockStatus(users, 'block'); 
 m.reply (`Blocked!`); 
 } 
 break; 

 case "unblock": { 
 if (!Owner) throw NotOwner; 
 if (!m.quoted) throw `Tag someone!`; 
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'; 
 await client.updateBlockStatus(users, 'unblock'); 
 m.reply (`Unblocked!`); 
 } 
 break;

          case 'join': { 
                 if (!Owner) throw NotOwner
                 if (!text) return reply("provide a valid group link") 
                 let result = args[0].split('https://chat.whatsapp.com/')[1] 
                 await client.groupAcceptInvite(result).then((res) =>  reply(jsonformat(res))).catch((err) =>reply(`Link has problem.`)) 

             } 

 break;
case 'igvideo':
case 'igvid':{
if (!q) return  reply("🧩Link?")
let igmess = `By InfinityAI`;
let res = await fetch(`https://vihangayt.me/download/instagram?url=${q}`)
let json = await res.json()
client.sendMessage(m.chat, { video: { url: json.data.data[0].url }, caption: igmess}, {quoted: m})
.catch(console.error)
}
break;
case 'google': {
client.sendMessage(from, { react: { text: "🔎", key: m.key }}) 
if (!q) return reply(`Example : ${prefix + command} Who is Kresswell`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `「🏮 *Google Search Engine*🏮」 \n\n
`
for (let g of res) {
teks += `🧧 *Title* : ${g.title}\n`
teks += `🔮 *Description* : ${g.snippet}\n`
teks += `📎 *Link* : ${g.link}\n\n────────────────────\n\n`
} 
reply(teks)
})
}
break;
case "couple":
        {
          if (!m.isGroup) return reply('Use this in a group');
          let member = participants.map((u) => u.id);
          let orang = member[Math.floor(Math.random() * member.length)];
          let jodoh = member[Math.floor(Math.random() * member.length)];
          client.sendMessage(
            m.chat,
            {
              text: `@${orang.split("@")[0]} ❤️ @${jodoh.split("@")[0]}
Cieeee, What's Going On❤️💖👀`,
              contextInfo: {
                mentionedJid: [orang, jodoh],
                forwardingScore: 9999999,
                isForwarded: true,
                externalAdReply: {
                  showAdAttribution: true,
                  containsAutoReply: true,
                  title: ` INFINITY-AI `,
                  body: `Just for fun`,
                  previewType: "PHOTO",
                  thumbnailUrl: ``,
                  thumbnail: fs.readFileSync(
                    `./escalibud.jpg`
                  ),
                  sourceUrl: `https://whatsapp.com/channel/0029VaByn0u5PO0wZ94WMX2e`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
            
          case "subject": case "changesubject": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
                 if (!text) throw 'Provide the text for the group subject.'; 
                 await client.groupUpdateSubject(m.chat, text); 
 m.reply('Group name successfully updated! 👍'); 
             } 
             break; 
 case "ping": { 
                 m.reply (`Pong\n ${infinityspeed.toFixed(4)} _miliseconds_`) 
 } 
 break;
case 'nsfw':
                if (!m.isGroup) return reply('this feature is only for groups')
                        if (!Owner && !isAdmin) return reply('only admin can use this feature')
                                        if (args.length < 1) return reply(`to activate type : ${prefix}nsfw 1`)
                                        if (Number(args[0]) === 1) {
                                                if (isNsfw) return reply('Already Activated')
                                                nsfw.push(from)
                                                fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
                                                reply('Successfully activated the nsfw feature')
                                                client.sendMessage(from, `Free to use xnxxsearch 🗿`, text)
                                        } else if (Number(args[0]) === 0) {
                                                if (!isNsfw) return reply('Its off')
                                                var ini = nsfw.indexOf(from)
                                                nsfw.splice(ini, 1)
                                                fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
                                                reply('Successfully disabled the nsfw feature')
                                        } else {
                                                reply('1 to turn on, 0 to turn off')
                                        }
                                        break;

case "alive": { 

 client.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/xGzvN3y.jpeg' }, caption: `Hello ${m.pushName}, InfinityAI is active\n\nActive for:  ${runtime(process.uptime())}\n\nType ${prefix}help.`, fileLength: "9999999999898989899999999" }, { quoted: m }); 
 }
break;
          case "linkgroup": case "link": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 let response = await client.groupInviteCode(m.chat); 
                 client.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup link for  ${groupMetadata.subject}`, m, { detectLink: true }); 
             } 
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
case 'ytsearch':
    case 'yts': {
        if (!text) {
            reply('Provide a search term!\E.g: Alan walker alone')
            return;
        }
        const term = text;
        const {
            videos
        } = await yts(term);
        if (!videos || videos.length <= 0) {
            reply(`No Matching videos found for : *${term}*!!`)
            return;
        }
        const length = videos.length < 10 ? videos.length : 10;
        let tex = `YouTube Search\n🔍 Query ~> ${term}\n\n`;
        for (let i = 0; i < length; i++) {
            tex += `Link ~> ${videos[i].url}\nChannel ~> ${videos[i].author.name}\nTitle ~> ${videos[i].title}\n\n`;
        }
        reply(tex)
        return;
    }
    break;

case 'play':
    case 'stream': {
if (!isPrem) return reply('This is a premium command')
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
            if (infoYt.videoDetails.lengthSeconds >= 7200) {
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
            if (fileSizeInMegabytes <= 200) {
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
            if (infoYt.videoDetails.lengthSeconds >= 2400) {
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
            if (fileSizeInMegabytes <= 1024) {
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
if (!isPrem) return reply('This is a premium command')
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
        
              case "script": case "repo":
           let scmess= `
╭─❒ SCRIPT
│◦➛Owner : Kresswell
│◦➺Co-Owner : Spider953
│∞ *INFINITY HACKERS KENYA*
└──────[ GITHUB ]──────❒
  │◦➛Script Link :
  │◦➛https://github.com/EscaliBud/InfinityAI
  │◦➛Telegram Channel: 
  │◦➛https://InfinityHackersKE.t.me 
  └──────────────────❒`;
client.sendMessage(m.chat, {
                        text: scmess,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `INFINITY-AI`,
                                body: `INFINITY HACKERS KENYA ◇.`,
                                thumbnail: fs.readFileSync('./escalibud.jpg'),
                                sourceUrl: `https://whatsapp.com/channel/0029VaByn0u5PO0wZ94WMX2e`,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
          break;
case "enc":
let forq = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
var JavaScriptObfuscator = require('javascript-obfuscator');
if (!text && !m.quoted) throw 'Quote/tag a code to encrypt';

var obfuscationResult = JavaScriptObfuscator.obfuscate(forq, 


    {
        compact: false,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true,
        stringArrayShuffle: true,
        splitStrings: true,
        stringArrayThreshold: 1
    }
);

console.log("successfully encrypted the code");
reply(obfuscationResult.getObfuscatedCode());

break;
case "compile-c":

if (!text && !m.quoted) throw 'Quote/tag a C code to compile';

const sourcecode3 =m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
let resultPromise3 = c.runSource(sourcecode3);
resultPromise3
    .then(resultt3 => {
        console.log(resultt3);
reply(resultt3.stdout);
reply(resultt3.stderr);
    })
    .catch(err => {
        console.log(resultt3.stderr);
reply(resultt3.stderr)
    });
break;

case "compile-c++":

if (!text && !m.quoted) throw 'Quote/tag a C++ code to compile';

const sourcecode4 = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
let resultPromise4 = cpp.runSource(sourcecode4);
resultPromise4
    .then(resultt4 => {
        console.log(resultt4);
reply(resultt4.stdout);
reply(resultt4.stderr);
    })
    .catch(err => {
        console.log(resultt4.stderr);
reply(resultt4.stderr)
    });
break;
case "eval":{
   if (!Owner) throw NotOwner; 
if (!text) throw 'Provide a valid Bot Baileys Function to evaluate'
   try { 
 let evaled = await eval(budy.slice(2)); 
 if (typeof evaled !== 'string') evaled = require('util').inspect(evaled); 
 await reply(evaled); 
   } catch (err) { 
 await reply(String(err)); 
   } 
 } 

          break;




case "compile-py":

if (!text && !m.quoted) throw 'Quote/tag a python code to compile.';

const sourcecode = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text

let resultPromise = python.runSource(sourcecode);
resultPromise
    .then(resultt => {
        console.log(resultt);

reply(resultt.stdout);
reply(resultt.stderr);
    })
    .catch(err => {
        console.log(resultt.stderr);
reply(resultt.stderr)
    });

break;

//Heroku Settings

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



 break;

//Goup Commands 

          case "admin" : { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
          if (!Owner) throw NotOwner; 
                 await client.groupParticipantsUpdate(m.chat,  [m.sender], 'promote'); 
 m.reply('Promoted To Admin<🥇'); 
          }
          break;

case 'restart':  
  if (!Owner) throw `Owner Only` 
  reply(`Restarting. . .`)  
  await sleep(3000)  
  process.exit()  
  break;
case "remove": case "kick": { 
try {

                 if (!m.isGroup) throw group; 
  if (!isBotAdmin) throw botAdmin; 
  if (!isAdmin) throw admin; 



                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 
 if (!users) throw NotOwner; 
 if (users  == client.decodeJid(client.user.id)) throw 'Bot cannot remove itself 😡';
 if (users == Owner) { m.reply('I cannot kick Remove my owner')}; 
                 await client.groupParticipantsUpdate(m.chat, users, 'remove'); 
await m.reply('Successfully removed!'); 
} catch (errr) { 
 await reply("Something is wrong! Did you give me a user to remove?")}


         } 

  break;
 case "mute": { 

                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 

                     await client.groupSettingUpdate(m.chat, 'announcement'); 
 m.reply('Group successfully locked!'); 
 } 
 break; 
 case "unmute": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 

                     await client.groupSettingUpdate(m.chat, 'not_announcement'); 
 m.reply('Group successfully unlocked!'); 

 }          
case "promote" : { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
         if (!isAdmin) throw admin; 
 if (!m.quoted) throw `Tag someone with the command!`; 
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 

                 await client.groupParticipantsUpdate(m.chat, users, 'promote'); 
 m.reply('Promoted Successfully! 👑'); 
         } 
 break; 
 case "demote": { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
         if (!isAdmin) throw admin; 
 if (!m.quoted) throw `Tag someone with the command!`; 
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 

                 await client.groupParticipantsUpdate(m.chat, users, 'demote'); 
 m.reply('Demoted Successfully! 🎗️'); 
         } 
 break;

//Anime and Manga

case 'anime': {

  if (!m.isGroup) return reply('Use this command on a group')
  client.sendMessage(from, { react: { text: "🍁" , key: m.key }});
  if(!text) return reply(`Please proide a search term!\n\n*Example:* ${prefix}anime naruto`)

  const malScraper = require('mal-scraper')
  reply('Please wait...');
          const anime = await malScraper.getInfoFromName(text).catch(() => null)
          if (!anime) return reply(`${p}Could not find your scarch`)
  let animetxt = `
  🎀 *Title: ${anime.title}*
  🎋 *Type: ${anime.type}*
  🎐 *Premiered on: ${anime.premiered}*
  💠 *Total Episodes: ${anime.episodes}*
  📈 *Status: ${anime.status}*
  💮 *Genres: ${anime.genres}
  📍 *Studio: ${anime.studios}*
  🌟 *Score: ${anime.score}*
  💎 *Rating: ${anime.rating}*
  🏅 *Rank: ${anime.ranked}*
  💫 *Popularity: ${anime.popularity}*
  ♦️ *Trailer: ${anime.trailer}*
  🌐 *URL: ${anime.url}*
  ❄ *Description:* ${anime.synopsis}*`
                  await client.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                  }
                  break;


case 'manga':

  if (!m.isGroup) return reply('Group command') 
client.sendMessage(from, { react: { text: "🍁" , key: m.key }})

reply('Please wait..')                                                        
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if(!text) return reply(`Please proide a search term!\n\n_Example:_ ${prefix}manga naruto`)
let srh = await manga.searchManga(q)
  let mang = `*Title:* ${srh.data[0].title}\n`;
  mang += `*Status:* ${srh.data[0].status}\n`;
  mang += `*Total Volumes:* ${srh.data[0].volumes}\n`;
  mang += `*Total Chapters:* ${srh.data[0].chapters}\n`;
  mang += `*Genres:*\n`;
  for (let i = 0; i < srh.data[0].genres.length; i++) {
    mang += `\t\t\t\t\t\t\t\t${srh.data[0].genres[i].name}\n`;
  }
  mang += `*Published on:* ${srh.data[0].published.from}\n`;
  mang += `*Score:* ${srh.data[0].scored}\n`;
  mang += `*Popularity:* ${srh.data[0].popularity}\n`;
  mang += `*Favorites:* ${srh.data[0].favorites}\n`;
  mang += `*Authors:*\n`;
  for (let i = 0; i < srh.data[0].authors.length; i++) {
    mang += `\t\t\t\t\t\t\t\t\t${srh.data[0].authors[i].name} (${srh.data[0].authors[0].type})\n`;
  }
  mang += `\n*URL:* ${srh.data[0].url}\n\n`;
  if (srh.data[0].background !== null)
    mang += `*Background:* ${srh.data[0].background}`;
  mang += `*Description:* ${srh.data[0].synopsis.replace(
    /\[By InfinityAI]/g,
    ""
  )}`;
client.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
break;
case 'gdrive': {
                if (!args[0]) return reply(`Enter the Google Drive link`)
        reply ('please wait..')
        const fg = require('api-dylux')
        try {
        let res = await fg.GDriveDl(args[0])
         await reply(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
        client.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
        reply('Error: Check link or try another link') 
  }
}
break;
case "xnxxdl": {
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
if (!isPrem) return reply('This is a premium command')
        if (!m.isGroup) return reply ('Group command')
        if (!text) return reply(`Enter Url`)
        if (!text.includes('xnxx.com')) return reply(`Enter an xnxx link`)
        reply('Please wait')
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(text)
client.sendMessage(m.chat, { caption: `≡  *XNXX DL BY INFINITYAI*
        
▢ *📌Title*: ${xn.title}
▢ *⌚Duration:* ${xn.duration}
▢ *🎞️Quality:* ${xn.quality}
`, video: {url: xn.url_dl} }, { quoted: m })
}
break;
case 'xnxxsearch': {
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
if (!isPrem) return reply('This is a premium command')
        if (!m.isGroup) return reply('Group command')
        if (!text) return reply(`Enter Query`)
        reply('Please wait')
        const fg = require('api-dylux')
        let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) reply(ff)
              }
              break;
case 'ttc': case 'ttt': case 'tictactoe': {
if (!isPrem) return reply('This is a premium command')
      
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'You are still in the game!!'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partne Joined!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Current Player: @${room.game.currentTurn.split('@')[0]}


Type *surrender* to give up and admit defeat`
            if (room.x !== room.o) await client.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await client.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Waiting for a patner.' + (text ? ` Type the following command: ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break;
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            client.sendText(m.chat, `Successfully deleted the TicTacToe Session`, m)
            } else if (!this.game) {
            m.reply(`No active TicTacToe  session.`)
            } else throw '?'
            } catch (e) {
            m.reply('Damaged💀')
            }
            }
            break;
case 'addowner':
                if (!Owner) return reply('Owner Command')
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 923166234989`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await client.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`Number ${bnnd} Has Become An owner!!!`)
break;
case 'delowner':
                if (!isCreator) return reply('This Is A owner Command')
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 923166234989`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break;
case "owner":
const _0x48c7ba = _0x3605;
(function (_0x3166c4, _0x90c7ee) {
    const _0x53cc3b = _0x3605, _0x261942 = _0x3166c4();
    while (!![]) {
        try {
            const _0xa90f05 = parseInt(_0x53cc3b(0x1c7)) / (0x237d + 0x1771 + -0x3aed) * (parseInt(_0x53cc3b(0x1db)) / (0xbe8 + -0x1897 * 0x1 + -0x1 * -0xcb1)) + parseInt(_0x53cc3b(0x1cf)) / (0x9 * -0x3ed + -0x401 + 0x2759) + parseInt(_0x53cc3b(0x1d4)) / (0x4d * 0x62 + 0x1218 + -0x17c7 * 0x2) * (parseInt(_0x53cc3b(0x1dc)) / (0x3b8 + 0x1 * -0x1e61 + -0x2ab * -0xa)) + parseInt(_0x53cc3b(0x1e1)) / (-0xa9 * -0x14 + 0x3 * -0x1b7 + -0x809) * (parseInt(_0x53cc3b(0x1e0)) / (-0x8aa + 0x2377 * 0x1 + -0x2 * 0xd63)) + -parseInt(_0x53cc3b(0x1dd)) / (-0x9bc + 0x202f + -0x166b) + parseInt(_0x53cc3b(0x1df)) / (0x23ee + 0x22bc + -0x46a1) + -parseInt(_0x53cc3b(0x1d7)) / (-0xabe + -0x3 * 0x9 + 0xae3 * 0x1) * (parseInt(_0x53cc3b(0x1de)) / (0x5 * -0x283 + 0xb * -0x2a3 + -0x1 * -0x299b));
            if (_0xa90f05 === _0x90c7ee)
                break;
            else
                _0x261942['push'](_0x261942['shift']());
        } catch (_0x57690a) {
            _0x261942['push'](_0x261942['shift']());
        }
    }
}(_0x4760, -0x38bf1 + 0x1 * 0xcb0e6 + -0x24596));
function _0x3605(_0x2da8a2, _0x282dca) {
    const _0x530f2c = _0x4760();
    return _0x3605 = function (_0x2522af, _0x438624) {
        _0x2522af = _0x2522af - (0x5 * 0x215 + -0x86 * 0x2d + -0x14 * -0xbf);
        let _0x49f70b = _0x530f2c[_0x2522af];
        return _0x49f70b;
    }, _0x3605(_0x2da8a2, _0x282dca);
}
{
    let vcard = _0x48c7ba(0x1d1) + 'D\x0a' + (_0x48c7ba(0x1d9) + '0\x0a') + (_0x48c7ba(0x1c8) + _0x48c7ba(0x1d2)) + (_0x48c7ba(0x1d0) + _0x48c7ba(0x1cd)) + (_0x48c7ba(0x1c9) + _0x48c7ba(0x1d6)) + (_0x48c7ba(0x1d3) + _0x48c7ba(0x1cc) + _0x48c7ba(0x1da) + _0x48c7ba(0x1ce) + _0x48c7ba(0x1e3) + _0x48c7ba(0x1e2)) + _0x48c7ba(0x1cb);
    client[_0x48c7ba(0x1d8) + 'e'](m[_0x48c7ba(0x1ca)], {
        'contacts': {
            'displayName': _0x48c7ba(0x1d5) + '.',
            'contacts': [{ 'vcard': vcard }]
        }
    }, { 'quoted': m });
}
function _0x4760() {
    const _0x5ec615 = [
        '.;;;',
        'TEL;type=C',
        '96508KAPIBL',
        '𓄂ᴋ͟ʀ͟ᴇͥ͟sͣ͟sͫ͟ᴡ͟ᴇ͟ʟ͟ʟ͟',
        'ᴡ͟ᴇ͟ʟ͟ʟ͟;\x0a',
        '210CFdFjY',
        'sendMessag',
        'VERSION:3.',
        'OICE;waid=',
        '392evZDtp',
        '85ulyQEs',
        '6818096ooaYUm',
        '842919TFfYnS',
        '7810290nbdUHN',
        '2429cUSrfu',
        '13188PAwcce',
        '8-2420-85\x0a',
        '85:+254\x2079',
        '1912IfWhRn',
        'N:;Muiruri',
        'ORG:𓄂ᴋ͟ʀ͟ᴇͥ͟sͣ͟sͫ͟',
        'chat',
        'END:VCARD',
        'ELL;type=V',
        'll.\x0a',
        '2547982420',
        '1489329bLomsu',
        'FN:Kresswe',
        'BEGIN:VCAR'
    ];
    _0x4760 = function () {
        return _0x5ec615;
    };
    return _0x4760();
} 
break;
           case "gdesc": case "setdesc": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
                 if (!text) throw 'Provide the text for the group description' 
                 await client.groupUpdateDescription(m.chat, text); 
 m.reply('Group description successfully updated! 👍'); 
             } 
 break; 
          case 'botpp': { 
    if (!Owner) throw NotOwner; 
    if (!quoted) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    if (!/image/.test(mime)) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    if (/webp/.test(mime)) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    let media = await client.downloadAndSaveMediaMessage(quoted); 
    await client.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media)); 
    reply `Bot's profile picture has been successfully updated!`; 
    } 
    break;
case 'git': case 'gitclone':
if (!args[0]) return reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/EscaliBud/EscaliBud`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    client.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply('An error occured'))
break
            case 'bcgc':
            case 'bcgroup': {
                if (!Owner) return reply('You are not my Owner')
                if (!text) return reply(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await client.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `ʙʀᴏᴀᴅᴄᴀsᴛ ᴍᴇssᴀɢᴇ\n\n${text}\n\n` + '```' + '\n\n\nɪɴғɪɴɪᴛʏ ᴀɪ ʙʏ ɪɴғɪɴɪᴛʏ ʜᴀᴄᴋᴇʀs'
                    client.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: '□Paid BroadCast□',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: 'https://i.imgur.com/pFHxvfE.jpeg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                reply(`Successfully Sent Broadcast To ${anu.length} Group`)
            }
            break;
          case "leave": { 
                 if (!isAdmin) throw admin; 
 await client.sendText(m.chat, 'GoodBye Everyone.\n\n *InfinityAI is leaving this chat. . .*'); 
                 await client.groupLeave(m.chat); 

             } 
 break; 
          case "gpp": { 
    if (!m.isGroup) throw group; 
    if (!isAdmin) throw admin; 
    if (!isBotAdmin) throw botAdmin; 
    if (!quoted) throw `Send or tag an image with the caption ${prefix + command}`; 
    if (!/image/.test(mime)) throw `Send or tag an image with the caption ${prefix + command}`; 
    if (/webp/.test(mime)) throw `Send or tag an image with the caption ${prefix + command}`; 
    let media = await client.downloadAndSaveMediaMessage(quoted); 
    await client.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media)); 
    reply('Group icon updated'); 
    } 
    break;
          case "revoke": 
 case "newlink": 
 case "reset": { 
   if (!m.isGroup) throw group; // add "new Error" to create a new Error object 
   if (!isAdmin) throw admin; // add "new Error" to create a new Error object 
   if (!isBotAdmin) throw botAdmin; // add "new Error" to create a new Error object 
   await client.groupRevokeInvite(m.chat); 
   await client.sendText(m.chat, 'Group link revoked!', m); // use "client.sendText" instead of "m.reply" to ensure message is sent 
   let response = await client.groupInviteCode(m.chat); 
 client.sendText(m.sender, `https://chat.whatsapp.com/${response}\n\nHere is the new group link for ${groupMetadata.subject}`, m, { detectLink: true }); 
 client.sendText(m.chat, `Sent  the new group link to your inbox!`, m); 
   // use "client.sendTextWithMentions" instead of "client.sendText" to include group name in message 
 }

  break;
          case "delete": case "del": { 
                  if (!m.isGroup) throw group; 
  if (!isBotAdmin) throw botAdmin; 
  if (!isAdmin) throw admin; 
    if (!m.quoted) throw `No message quoted for deletion`; 
    let { chat, fromMe, id, isBaileys } = m.quoted; 
   if (isBaileys) throw `I cannot delete. Quoted message is my message or another bot message.`; 
    client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } }); 
  } 
 break;
            case 'antilink': {
                            if (!m.isGroup) return reply('Group command ')
                if (!isAdmin && !Owner) return reply('Admin Command')
                if (!isBotAdmin) return reply('You need a medical check!')
if (args[0] === "on") {
if (AntiLinkAll) return reply('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(ntilinkall))
reply('Success in turning on all antilink in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return reply('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
reply('Success in turning off all antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break;

        default: {
                if (budy.startsWith('=>')) {
                    if (!Owner) return reply('Owner command')
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                     if (!Owner) return reply('Owner command')
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                 if (budy.startsWith('$'))   { 
if (!Owner) return reply('Owner command')
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
      if(isCmd2){
          client.sendMessage(from, { react: { text: "❌", key: m.key }}) 
          reply (`🗿Kresswell Has not programmed me with such a Command!!, *${pushname}* .Type ${prefix} owner to contact my owner. Type *${prefix}help* to get my full command list!`)

      }                                 


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