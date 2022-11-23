let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = db.data.users[who]
    if (!who) throw `tag atau balas pesan yang mau dijadikan premium!`
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw `berapa hari mamaskuh?`
    if (isNaN(txt)) return m.reply(`hanya nomor mamaskuh!\n\ncontoh:\n${usedPrefix + command} @${m.sender.split`@`[0]} 7`)
    var jumlahHari = 86400000 * txt
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += jumlahHari
    else user.premiumTime = now + jumlahHari
    user.premium = true
    m.reply(`Berhasil!\n*${user.name}* sekarang sudah premium ${txt} hari.`)
    
    const cooldown = 604800000
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastweekly < cooldown) throw `You have already claimed this daily claim!, wait for *${((user.lastweekly + cooldown) - new Date()).toTimeString()}*`
  
}
handler.help = ['addprem [@user] <hari>']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)p(rem)?$/i
handler.cooldown = cooldown

handler.rowner = true

export default handler
