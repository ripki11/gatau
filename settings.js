// Mau ubah image Tumb nya ada di
// gambar/maslent.jpg [ caru fotomy trus ganti namanya jadi maslent.jpg ya]

//Mau ubah Voicenote di help ada di
//purel/toxic/hai.mp3
//kalau mau ubah cari mp3 lalu ubah namnya jadi hai.mp3 lalu replace tro di situ ya

// ada kendala bisa dm ig @vlntncptr

//ambil key open ai di sini
//https://beta.openai.com/account/api-keys
//singup atau daftar


//nama sesionya = session.json

const fs = require('fs')
const chalk = require('chalk')

//==========[Auto]====
global.autoTyping = false
global.autoRecord = false 
global.autoreadpmngc = false //======= True ON False OFF
global.autoReadGc = false
global.available = false
//==========[end]

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//==================[Global]==========
global.owner = ["62882000039019","6281xxxxxx"] 
global.ownername = "TOBOT V6" 
global.ytname = "YT: Lenttobs" //=============[Ubah aja terserah]
global.socialm = "Ngapa Bro? Donate La bro etdah" 
global.location = "Indonesia, bandung, majalengy" 
//=================[end]==========

global.ownernomer = ["62882000039019","6281xxx6x0"]
global.premium = ['62882000039019'] 
global.botname = 'TOBOT                 ><                LENTOBS'
global.linkz = "https://chat.whatsapp.com/LRCGXKpjpznInxx3sAC" 
global.websitex = "https://youtu.be/BwTSHvgjB7w" 
global.botscript = 'https://github.com/Adakadbra' 
global.themeemoji = "♥️" 
global.packname = "Sticker By itoy" 
global.author = "TOBOT WA\n\n\nMenerima Jasa pembuatan Sticker Gratis\n\n\n\n\n\n\n\nKamu Nanya? Cara Buat sticker Gratis?\n\n\n\n\n\n\n\nNih Nomor Bot:62882000039019"
global.wm = "TOBOT AI" 
global.thm = "'https://telegra.ph/file/1eada96478e36aaeac324.jpg"
global.snk = "hallo\n\n sebelum Menggunakan Bot Whatsaap Di Wajibkan Join Grub Official Bot Whatsaap Kamu Berikut link nya https://chat.whatsapp.com/FEJwHDkxxxxx5kq Jika Tidak Join Group Kamu Tidak Akan Mendapatkan akses Menggunakan Bot kami"
global.paymentowner = "08xxxxx"
global.dana = "62882000039019"
global.pulsa ="62882000039019"
global.gopay = "628xx"
///======= yang XXXX itu Ubah ya =========
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Nih Kak Hehehe ><',
    admin: '< ! > Mohon Maaf Fitur Hanya Bisa Di gunakan Oleh Admin',
    botAdmin: '< ! > Mohon Maaf Fitur Ini Bisa Di gunakan Apabila Bot telah Di Angkat Menjadi Admin',
    premime: '< ! > Mohon Maaf Fitur Ini Hanya Bisa Di Gunakan Oleh User Premium',
    owner: '< ! > [Anda Bukan Owner Saya -_-] jangan Menggunakan Fitur ini !!!!!!',
    group: '< ! > Mohon Maaf Fitur Hanya Bisa Di Gunakan Di dalam Group!!',
    private: '< ! > Mohon Maaf Fitur Ini Hanya Bisa di Gunakan di Dalam Private Chat',
    bot: '< ! > Fitur Khusus Bot',
    wait: '⋘ 𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑑𝑎𝑡𝑎... ⋙',
    linkm: '< ! > Mana Link Nya?',
    endLimit: '< ! > Limit Kamu Telah Habis!! Tunggu jam 12 malam Atau bisa membeli paket Limit',
    nsfw: '< ! > Fitur Paket Premium Mohon Beli Paket Premium Terlebih dahulu!!',
}

global.thum = fs.readFileSync("./gambar/maslent.jpg") 
global.log0 = fs.readFileSync("./gambar/maslent.jpg")  // tuh lokasinya 
global.err4r = fs.readFileSync("./gambar/maslent.jpg") 
global.thumb = fs.readFileSync("./gambar/maslent.jpg") 
global.flaming = 'https://www6.flamingtext.com/logo/Design-Gay-Pride?_variations=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.fluming = 'https://www6.flamingtext.com/logo/Design-Gay-Pride?_variations=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/logo/Design-Gay-Pride?_variations=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/logo/Design-Gay-Pride?_variations=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
