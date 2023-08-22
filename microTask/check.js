

// const fs = require('node:fs') ;

// fs.readFile(__filename, ()=>{
//     console.log('readFile-1')
// })
// process.nextTick(()=>console.log('NextTick 1'))
// Promise.resolve().then(()=>console.log('Promise-1'))
// // setTimeout(()=>console.log('setTimeout 1'), 0 )
// setImmediate(()=>{
//     console.log('setImmidiate 1')
// })

//because of readFile takes part in I/O polling ... 
//The execution goes to the check que 

//To fix this behaviour we should define check inside the I/O 

const fs = require('node:fs') ;

fs.readFile(__filename, ()=>{
    console.log('readFile-1')
    setImmediate(()=>{
        console.log('InnersetImmidiate in readfile-1')
    })

    process.nextTick(()=>console.log('nextTick inside readfile'));
    Promise.resolve().then(()=>console.log('promise in readFile'))

})
process.nextTick(()=>console.log('NextTick 1'))
Promise.resolve().then(()=>console.log('Promise-1'))
setTimeout(()=>console.log('setTimeout 1'), 0 )

//micrtosak inside read file r execute after the I/O call back itself executed and before the check


