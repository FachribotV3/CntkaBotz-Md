let handler = async (m, { conn, text }) => {
	let wm = global.wm
        let fbz = 'https://telegra.ph/file/b17f0ba47c63bcfadc3df.jpg'
	let groups = Object.entries(await conn.groupFetchAllParticipating()).filter(([jid, chat]) => !chat?.announce).map(v => v[0]),
		cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m,
		teks = text ? text : cc.text
	await m.reply(`_Mengirim pesan broadcast ke ${groups.length} group_`)
	for (let id of groups) 
	await conn.send2ButtonImg(id, fbz, '*—「 FachriBot Broadcast 」—*\n' + teks, 'Fachri Bot By Fachri', [['Menu', '.menu'], ['Owner', '.owner']], ftroli, m)
	m.reply('Selesai Broadcast All Group')
}
handler.help = ['broadcastgcimg']
handler.command = /^(broadcastgcimg)$/i
handler.tags = ['owner']
handler.owner = true

export default handler

function readMore() {
	return (String.fromCharCode(8206)).repeat(4001)
}
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
