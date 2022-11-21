let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let info = `
key verifikasi:
https://karyawan.co.id/L4xA24nF
setelah melewati shortlink, kamu akan mendapatkan key berupa angka. copy kay tersebut dan paste ke dm chat bot.
Jika key yang dikirim benar, maka kamu akan terdaftar di database bot dan dapat memakai fitur!

Key berbeda setiap user
`
const sections = [
   {
	title: `${htjava} WKWK ✦-------`,
	rows: [
	    {title: "🔖 TES"},
	]
    }, {
    title: `${htjava} HEHEHE ✦-------`,
	rows: [
	    {title: "🌟 TES"},
	   
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "jangan diklik gada apa apa!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}


handler.help = ['addprem [@user] <hari>']
handler.tags = ['owner']
handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler
