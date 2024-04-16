const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6281911317205']
global.name = 'Lins Official'
global.JEDA = 5000
global.namapush = ' 𝗦𝗔𝗩𝗘 𝗔𝗗𝗜𝗧𝗬𝗔 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟  '

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blueBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
