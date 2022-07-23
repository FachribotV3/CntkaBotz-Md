import fs from 'fs'
 let handler  = async (m, { conn, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = (await import("@adiwajshing/baileys")).default;
 global.anu = {
	 key : {
                           participant : '0@s.whatsapp.net'
                         },
        message: {
                     orderMessage: {
                             itemCount : 404,
                             itemCoun : 404,
                             surface : 404,
                             message: '© FachriBot By Fachri',
                             orderTitle: 'B',
                             thumbnail: fs.readFileSync('./IMG-20220707-WA0022.jpg'), 
                             sellerJid: '0@s.whatsapp.net'
          
                           }
                         }
                       }

conn.sendMessage(m.chat,{text:wm}, {quoted: anu})
}


handler.help = ['troli']

handler.tags = ['general']

handler.command = /^troli$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true

export default handler
