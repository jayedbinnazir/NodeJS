const fs = require('node:fs')


fs.readFile(__filename , ()=>{
    console.log('readfile 1')
})

process.nextTick(()=>{
    console.log('process.nextTick 1')
})
Promise.resolve().then(()=>{
    console.log('resolve 1')
})
setTimeout(()=>console.log('Time 1'),0) ;

