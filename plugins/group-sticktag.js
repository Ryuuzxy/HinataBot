/*
by hyzer 
cuman tes doang 🥶🙏
*/
import fetch from 'node-fetch'
import { webp2png } from'../lib/webp2mp4'
let handler = async (m, { conn, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  if (!m.quoted) throw 'reply stikernya...'
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw 'stiker invalid'
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
  if (/webp/.test(mime)) {
    out = await webp2png(media)
  }
  
  conn.sendFile(m.chat, out, 'sticker.webp', '', m, null, { fileLength: fsizedoc, contextInfo: {
  mentions: participants.map(a => a.id),
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
handler.help = ['stickertag', 'sticktag']
handler.tags = ['tag']
handler.command = /^(stickertag|sticktag)$/i
export default handler
