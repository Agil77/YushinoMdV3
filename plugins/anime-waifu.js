import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
     user.premium = true
    conn.sendButton(m.chat, 'Istrinya Kartun', author, json.url, [['waifu', `${usedPrefix}waifu`]], m)
}
handler.help = ['kdhtyaqnhggy']
handler.tags = ['anime']
handler.limit = true
handler.command = /^(kdhtyaqnhggy)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
