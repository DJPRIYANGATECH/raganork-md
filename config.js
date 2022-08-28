const fs = require('fs');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
DATABASE_URL = process.env.DATABASE_URL === undefined ? './bot.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
module.exports = {
    VERSION: 'v3.0.0',
    ALIVE: process.env.ALIVE || "https://telegra.ph/file/409612193ca7e7645e773.jpg Hey {sender},
    ┏━───𓄂᳆𝐃𝐀𝐑𝐊〲𝐋𝐈𝐎𝐍〴𝐁𝐎𝐓࿐𝑶𝑵𝑳𝑰𝑵𝑬 𝑵𝑶𝑾
    

┗━┬❖ ◤𝘿𝘼𝙍𝙆 𝙇𝙄𝙊𝙉 𝘽𝙊𝙏◢
    

┏━┃➥ 𝑴𝑼𝑳𝑻𝑰 𝑫𝑰𝑽𝑰𝑪𝑬 𝑩𝑶𝑻

┃   ┗━───────────────┈

┃ ◤ 𝑩𝑶𝑻 𝑰𝑵𝑭𝑶 ◢

┃┋➥ ᴀʟɪᴠᴇ ᴍꜱɢ

┃┋──────────────────

┃┋➥ 𝗕𝗢𝗧 𝗡𝗔𝗠𝗘 : 𝘿𝘼𝙍𝙆 𝙇𝙄𝙊𝙉
    

┃┋➥ 𝗢𝗪𝗡𝗘𝗥 𝗡𝗔𝗠𝗘 : 𓄂᳆⎝𝐃𝐉〲𝐏𝐑𝐈𝐘𝐀𝐍𝐆𝐀〴𝐓𝐄𝐂𝐇⎠࿐
    

┃┋➥ 𝗢𝗪𝗡𝗘𝗥 𝗡𝗨𝗠 : 94781544996
    

┃┋➥ 𝙈𝙔 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝘾𝙃𝙉𝙉𝙀𝙇 : ```https://youtube.com/channel/UCn0BtDyH_PgXzBmE-NQCgHw```
    

┃┋➥ 𝗖𝗠𝗗 𝗟𝗜𝗦𝗧 : .𝒎𝒆𝒏𝒖
    

┃┋➥ 𝐁𝐎𝐓 𝐆𝐑𝐏 :  ```https://chat.whatsapp.com/F0CNZiQTJJCDWOPc1D5qj4```

┗━┬──────────────┈ 

   ┃➥ ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴇɴᴊᴏʏ ᴛʜɪꜱ ʙᴏᴛ

   └───────────────

ʙᴇsᴛ ᴡʜᴀᴛsᴀᴘᴘ ᴍᴏᴅ : 

❱ https://hoter.co/A/75786wut ❰

  🍁𓄂᳆𝐃𝐀𝐑𝐊〲𝐋𝐈𝐎𝐍〴𝐁𝐎𝐓࿐🍁
    Uptime: {uptime}",
    BLOCK_CHAT: process.env.BLOCK_CHAT || "*INBOX BLOCK ACTIVATE BY BOT OWNER*

😹ඉන්බොක්ස් බොට් වැඩ නැ😈

┏━─𓄂᳆𝐃𝐀𝐑𝐊〲𝐋𝐈𝐎𝐍〴𝐁𝐎𝐓࿐𝘽𝙊𝙏 𝙄𝙉𝘽𝙊𝙓 𝘽𝙇𝙊𝘾𝙆 𝑵𝑶𝑾

┃

┗━┬❖ ◤𓄂᳆𝐃𝐀𝐑𝐊〲𝐋𝐈𝐎𝐍〴𝐁𝐎𝐓࿐◢

┏━┃➥ 𝑴𝑼𝑳𝑻𝑰 𝑫𝑰𝑽𝑰𝑪𝑬 𝑩𝑶𝑻

┃   ┃➥  🤍🍃!!

┃   ┗━───────────────┈

┃ ◤ 𝑩𝑶𝑻 𝑰𝑵𝑭𝑶 ◢

┃┋➥ 𝗕𝗢𝗧 𝗡𝗔𝗠𝗘 : 𓄂᳆𝐃𝐀𝐑𝐊〲𝐋𝐈𝐎𝐍〴𝐁𝐎𝐓࿐

┃┋➥ 𝗢𝗪𝗡𝗘𝗥 𝗡𝗔𝗠𝗘 : 𓄂᳆𝐃𝐀𝐑𝐊〲𝐋𝐈𝐎𝐍〴𝐁𝐎𝐓࿐

┃┋➥ 𝗢𝗪𝗡𝗘𝗥 𝗡𝗨𝗠 : wa.me/94781544996

┃┋➥ 𝗛𝗢𝗦𝗧 𝗡𝗔𝗠𝗘 : 𓄂᳆𝐃𝐀𝐑𝐊〲𝐋𝐈𝐎𝐍〴𝐁𝐎𝐓࿐

┃┋➥ 𝗖𝗠𝗗 𝗟𝗜𝗦𝗧 : .𝒎𝒆𝒏𝒖

┃┋➥ 𝗢𝗨𝗥 𝗚𝗥𝗣 :  ```https://chat.whatsapp.com/F0CNZiQTJJCDWOPc1D5qj4```

┗━┬──────────────┈ 

   ┃➥ ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴇɴᴊᴏʏ ᴛʜɪꜱ ʙᴏᴛ

   └──────────────

𓄂᳆𝐃𝐀𝐑𝐊〲𝐋𝐈𝐎𝐍〴𝐁𝐎𝐓࿐**,
    ALWAYS_ONLINE: convertToBool(process.env.ALWAYS_ONLINE) || false,
    AUTOMUTE_MSG: process.env.AUTOMUTE_MSG || '_Group automuted!_\n_(Change this by setting var AUTOMUTE_MSG)_',
    ANTI_SPAM: process.env.ANTI_SPAM || '919074309534-1632403322@g.us',
    ANTISPAM_COUNT: process.env.ANTISPAM_COUNT || '7/10',
    AUTOUNMUTE_MSG: process.env.AUTOUNMUTE_MSG || '_Group auto unmuted!_\n_(Change this by setting var AUTOUNMUTE_MSG)_',
    READ_MESSAGES: convertToBool(process.env.READ_MESSAGES) || false,
    PMB_VAR: convertToBool(process.env.PMB_VAR) || false,
    DIS_PM: convertToBool(process.env.DIS_PM) || false,
    REJECT_CALLS: convertToBool(process.env.REJECT_CALLS) || false,
    PMB: process.env.PMB || '*Personal messages not allowed. Blocking you!*',
    READ_COMMAND: convertToBool(process.env.READ_COMMAND) || true,
    SESSION: process.env.SESSION || '',
    IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f","deb80cd12ababea1c9b9a8ad6ce3fab2","78c84c62b32a88e86daf87dd509a657a"],
    RG: process.env.RG || '919074309534-1632403322@g.us',
    BOT_INFO: process.env.BOT_INFO || 'Raganork;Skl11;0;https://i.imgur.com/P7ziVhr.jpeg;https://chat.whatsapp.com/Dt3C4wrQmt0GG6io1IBIHb',
    RBG_KEY: process.env.RBG_KEY || '',
    ALLOWED: process.env.ALLOWED || '91,94,212',
    CHATBOT: process.env.CHATBOT || 'off',
    HANDLERS: process.env.HANDLERS || '.,',
    STICKER_DATA: process.env.STICKER_DATA,
    BOT_NAME: process.env.BOT_NAME || 'Raganork',
    AUDIO_DATA: process.env.AUDIO_DATA === undefined || process.env.AUDIO_DATA === "private" ? 'ꪶ͢٭𝑺𝜣𝑼𝑹𝛢𝑽𝑲𝑳¹¹ꫂ;Raganork MD bot;https://www.linkpicture.com/q/rgnk.jpg' : process.env.AUDIO_DATA,
    TAKE_KEY: process.env.TAKE_KEY || '',
    MODE: process.env.MODE || 'private',
    WARN: process.env.WARN || '4',
    ANTILINK_WARN: process.env.ANTILINK_WARN || '',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '',
        APP_NAME: process.env.HEROKU_APP_NAME || ''
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './bot.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    SUDO: process.env.SUDO || "",
    LANGUAGE: process.env.LANGUAGE || 'english',
    DEBUG: DEBUG,
    ACR_A: "ff489a0160188cf5f0750eaf486eee74",
    ACR_S: "ytu3AdkCu7fkRVuENhXxs9jsOW4YJtDXimAWMpJp"
    };
