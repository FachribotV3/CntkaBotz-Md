function handler(m) {
  let data = global.owner.filter(([id, isCreator]) => id && isCreator)
  let ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 1,status: 200, surface: 200, message: `                   「 MY OWNER 」            `, orderTitle: 'FachriBot', sellerJid: '0@s.whatsapp.net'}}}
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), false, { quoted: ftroli, contextInfo:{ externalAdReply: {title: 'Ini nomor orang ganteng', body: `${pickRandom(['Simple Bot WhatsApp', 'Create By Fachri'])}`, sourceUrl: 'https://github.com/Ipulpachri', thumbnail: await (await fetch('https://telegra.ph/file/63c668962b7abcc95b394.jpg')).buffer(),}}
})

handler.alias = ['owner']
handler.command = /^(owner)$/i

export default handler
