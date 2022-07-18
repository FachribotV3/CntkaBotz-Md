let fs = require('fs')
let handler = async (m, { conn, isROwner, text }) => {
const fgc = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6285240750713-1610340626@g.us",
			"inviteCode": "mememteeeekkeke",
			"groupName": "Grub Bot", 
            "caption": "「 Fachri Bot Broadcast 」", 
            'jpegThumbnail': fs.readFileSync('./IMG-20220707-WA0022.jpg')
		}
	}
}
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    let fbm = 'https://telegra.ph/file/c8a096af333a2506f20d5.png'
    var pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'teksnya?'
    m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 0.5 } detik`)
    for (let i of anu) {
    await delay(500)
    conn.send2ButtonImg(i, fbm, `${pesan}`, wm, 'Owner', '.owner', 'Menu', '.menu', fgc).catch(_ => _)
    }
  m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
handler.help = ['bcgcimg <teks>']
handler.tags = ['owner']
handler.command = /^(bcgcimg|bcgc2)$/i

handler.owner = true

module.exports = handler
