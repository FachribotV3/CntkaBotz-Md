import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Assalamualaikum.mp3'
conn.sendFile(m.chat, vn, 'Assalamualaikum.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: {title: 'Stay Grateful With Your Life', body: 'Create By Fachri', sourceUrl: 'https://github.com/Ipulpachri', thumbnail: await (await fetch('https://telegra.ph/file/801f5c6efcb9565fe99f5.jpg')).buffer(),}} 
})
}
handler.help = ['assalamualaikum']
handler.tags = ['sound']
handler.customPrefix = /(assalamualaikum|Assalamualaikum|assalamu'alaikum|Assalamu'alaikum)/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
