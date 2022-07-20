import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Assalamualaikum.mp3'
conn.sendFile(m.chat, vn, 'Assalamualaikum.mp3', null, fkontak, true, {
type: 'audioMessage', 
ptt: true, contextInfo: { showAdAttribution: true,
         externalAdReply: { 
            mediaType:  1,
            mediaUrl: 'https://wa.me/17608914335',
            title: 'Waalaikumussalam kak',
          body: wm,
         sourceUrl: 'http://github.com/Ipulpachri', thumbnail: await( await fetch('https://telegra.ph/file/a9a6907db67ca1a0c0877.jpg')).buffer()
         } 
      } 
   })
}

handler.help = ['assalamualaikum']
handler.tags = ['sound']
handler.customPrefix = /(assalamualaikum|Assalamualaikum|assalamu'alaikum|Assalamu'alaikum)/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
