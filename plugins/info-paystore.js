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
TOKEN PREMIUM:
https://karyawan.co.id/RsHUR2JoA

setelah melewati shortlink, kamu akan mendapatkan token berupa huruf random. copy token tersebut dan paste ke dm chat bot.
Jika token benar, maka kamu akan menjadi user premium!

TOKEN akan direset setiap harinya
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


handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
