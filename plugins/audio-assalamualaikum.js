import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Assalamualaikum.mp3'
conn.sendFile(m.chat, vn, 'Assalamualaikum.mp3', null, fkontak, true, {
type: 'audioMessage', 
ptt: true, contextInfo: { externalAdReply: { showAdAttribution: true,
title: 'Waalaikumussalam Kak😇',
body: `${pickRandom(['Simple Bot WhatsApp', 'Create By Fachri'])}`, 
sourceUrl: 'https://github.com/Ipulpachri', 
thumbnail: await (await fetch('https://telegra.ph/file/63c668962b7abcc95b394.jpg')).buffer(),
}
} })

handler.help = ['assalamualaikum']
handler.tags = ['sound']
handler.customPrefix = /(assalamualaikum|Assalamualaikum|assalamu'alaikum|Assalamu'alaikum)/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler

function wish() {
    let wishloc = ''
  const time = moment.tz('Asia/Kolkata').format('HH')
  wishloc = ('Hi')
  if (time >= 0) {
    wishloc = ('Selamat DiniHari')
  }
  if (time >= 4) {
    wishloc = ('Selamat Pagi Kak')
  }
  if (time >= 12) {
    wishloc = ('Selamat Siang Kak')
  }
  if (time >= 18) {
    wishloc = ('️Selamat Sore Kak')
  }
  if (time >= 23) {
    wishloc = ('Selamat Malam Kak')
  }
  return wishloc
    }
 function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
