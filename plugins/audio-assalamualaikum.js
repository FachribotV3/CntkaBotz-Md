import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Assalamualaikum.mp3'
conn.sendFile(m.chat, vn, 'Assalamualaikum.mp3', null, fkontak, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: {title: 'Waalaikumussalam Kak😇', body: `${pickRandom(['Simple Bot WhatsApp', 'Create By Fachri'])}`, sourceUrl: 'https://github.com/Ipulpachri', thumbnail: await (await fetch('https://telegra.ph/file/63c668962b7abcc95b394.jpg')).buffer(),}}
}
handler.help = ['assalamualaikum']
handler.tags = ['sound']
handler.customPrefix = /(assalamualaikum|Assalamualaikum|assalamu'alaikum|Assalamu'alaikum)/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
