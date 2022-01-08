const Discord = require("discord.js")
const client = new Discord.Client();
const fs = require('fs');
const db = require('quick.db');
const moment = require('moment')
require('moment-duration-format')
const commands = client.commands = new Discord.Collection();
const aliases = client.aliases = new Discord.Collection();
const invites = {};
const wait = require("util").promisify(setTimeout);

fs.readdirSync('./commands', { encoding: 'utf8' }).filter(file => file.endsWith(".js")).forEach((files) => {
    let command = require(`./commands/${files}`);
    if (!command.name) return console.log(`Hatalı Kod Dosyası => [/commands/${files}]`)
    commands.set(command.name, command);
    if (!command.aliases || command.aliases.length < 1) return
    command.aliases.forEach((otherUses) => { aliases.set(otherUses, command.name); })
})


client.on('message', message => {
    const prefix = "."; // prefix
    if (!message.guild || message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))
    if (!cmd) return;
    cmd.run(client, message, args)
})

client.on('ready', () => {
    wait(1000);
    client.user.setPresence({ activity: { name: 'Arcenio ❤️ Valentina' }, status: 'online' });
    
    console.log(`Bot ${client.user.tag} Adı İle Giriş Yaptı!`);
    });

client.config = {

    duckyinhasmetlitokeni: '', //token
    guildID: '914513779587428392', //sunucu id

   ////////////////////////////////

    
    ////////////////////////////////

    king: ['914513779855859747'], //tüm .vocal .designer vs kullanabılecek kişi

    vocal: ['914513779704856644'], //VOKAL

    designer: ['914513779704856639'], //DESIGNER

    streamer: ['914513779725840447'], //STREAMER

    sponsor: ['914513779725840451'], //SPONSOR

    şair: ['914513779717447710'], //ŞAİR

      ////////////////////////////////

   yetkilialımdm: ['914513779855859742'], //YETKI VERECEK ALACAK KİŞİLER!

    ilkyetkilipermi: ['914513779771973670','914513779771973662'], //İLK YETKİLİ PERMİ + REGİSTER ROL İD

    ////////////////////////////////
    tik: '914526310225838100', //tik
    no: '914525097618968587', //carpı
    
    tag:'✫' ,//tag
    tag2:'•'
}




/*Beyaz listede olmayan kişiler yönetici olsa bile küfür edemez */


/*Mesaj Silme Log */


/*Ufak hatalarda botun ofline olmaması için */
process.on('uncaughtException', function(err) { 
  console.log(err) 
});

const kiltifat = [
  'Gözlerindeki saklı cenneti benden başkası fark etsin istemiyorum.',
  'Mavi gözlerin, gökyüzü oldu dünyamın.',
  'Parlayan gözlerin ile karanlık gecelerime ay gibi doğuyorsun.',
  'Huzur kokuyor geçtiğin her yer.',
  'Öyle bir duru güzelliğin var ki, seni gören şairler bile adına günlerce şiir yazardı.',
  'Gözlerinin hareketi bile yeter  benim aklımı başımdan almaya.',
  'Güller bile kıskanır seni gördükleri zaman kendi güzelliklerini.',
   'Hiç yazılmamış bir şiirsin sen, daha önce eşi benzeri olmayan.',
   'Adım şaire çıktı civarda. Kimse senin şiir olduğunun farkında değil henüz.',
   'Etkili gülüş kavramını ben senden öğrendim.',
   'Seni anlatmaya kelimeler bulamıyorum. Nasıl anlatacağımı bilemediğim için seni kimselere anlatamıyorum.',
   'Gözlerinle baharı getirdin garip gönlüme.',
   'Bir gülüşün ile çiçek açıyor bahçemdeki her bir çiçek.',
   'Yuva kokuyor kucağın. Sarılınca seninle yuva kurası geliyor insanın.',
   'Sen bu  dünyadaki bütün şarkıların tek sahibisin. Sana yazılıyor bütün şarkılar ve şiirler. Adın geçiyor bütün namelerde.',
   'Seni yüreğimde taşıyorum ben, sırtımda taşımak ne kelime. Ömrüm boyunca çekmeye hazırım her anlamda senin yükünü.',
   'Hayatıma gelerek hayatımdaki bütün önemli şeylerin önemsiz olmasını sağladın. Artık sensin tek önem verdiğim şu hayatta.',
   'Sen benim bu hayattaki en büyük duamsın.  Gözlerin adeta bir ay parçası. Işık oluyorsun karanlık gecelerime.',
   'Aynı zaman diliminde yaşamak benim için büyük ödüldür.',
  'Biraz Çevrendeki İnsanları Takarmısın ?',
  'Biliyormusun? Arcenio seni çok seviyor...', 
  'kimse sevmesin ben severim seni caneeeem',
  'seni seviom', 
   'Kalbime giden yolu aydınlatıyor gözlerin.  Sadece sen görebilirsin kalbimi. Ve sadece ben hissedebilirim bana karşı olan hislerini.',
   'Onu Bunu Boşver de bize gel 2 bira içelim.',
    'merhem oldun yaralarıma',
    'Mucizelerden bahsediyordum sen geldin aklıma.',
];
client.on("message", async message => {
  if(message.channel.id !== ('914513782066278435')) return;
  let duckywashere = db.get('chatiltifat');
  await db.add("chatiltifat", 1);
  if(duckywashere >= 35) {
    db.delete("chatiltifat");
    const random = Math.floor(Math.random() * ((kiltifat).length - 1) + 1);
    message.reply(`${(kiltifat)[random]}`);
  };
});


//------------------------------------------------------------------------------------------------------------\\

client.on("message", message => {
  if(message.content.toLowerCase() == "sa") 
  return message.channel.send(`${message.author}, Aleykümselam hoşgeldin`)
});

client.on("message", message => {
  if(message.content.toLowerCase() == "selam") 
  return message.channel.send(`${message.author}, Selam hg knk`)
});

client.on("message", message => {
  if(message.content.toLowerCase() == "merhaba") 
  return message.channel.send(`${message.author}, Merhaba hoşgeldin dostum`)
});

client.on("message", message => {
  if(message.content.toLowerCase() == "3111") 
  return message.channel.send(`Sj ĞFŞWŞVŞWLCŞWŞCAĞXPŞDPQŞDĞQLXŞQŞXŞQLCAŞLCSLLCSLXAİŞZKEPDFKLFOEOD`)
});

client.on("message", message => {
  if(message.content.toLowerCase() == "s.a") 
  return message.channel.send(`${message.author}, Aleykümselam hoşgeldin`)
});

client.on("message", message => {
  if(message.content.toLowerCase() == "mrb") 
  return message.channel.send(`${message.author}, Mrb hoşgeldin`)
});

client.on("message", message => {
  if(message.content.toLowerCase() == "slm") 
  return message.channel.send(`${message.author}, Slm hoşgeldin`)
});

//------------------------------------------------------------------------------------------------------------\\




client.login(client.config.duckyinhasmetlitokeni)
