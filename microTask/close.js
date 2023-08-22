
const fs =  require('node:fs') ;

const readableStream= fs.createReadStream(__filename) ;

readableStream.close() ;

readableStream.on('close',()=>{
    console.log('file reading closed')
})

process.nextTick(()=>console.log('nextTick 1'))
Promise.resolve().then(()=>console.log('promise 1'))