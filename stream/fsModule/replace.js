console.log('Replace') ;

const fs =  require('node:fs') ;

const readFile = fs.readFileSync('./readReplace.txt', 'utf-8') ;
const name = 'Jayed'
fs.writeFileSync('./replaced.txt',readFile.replace("{{name}}",name))