console.log('MicroTasks');
//use process.nextTick to handle errors, clean unnecessary code .
//Try the req. again before the event loop continues
//to allow a callback to run after the cllastack has unwound but before the eventloop continues


//process.nextTick(CB)-->Promise(CB)-->Timer(CB)->I/O(CB)-->check(CB)-->close(CB)

console.log('task1')

//Timer Que callBacks r executed in FIFO order

setTimeout(()=>console.log('TimeOut 1'),0)
setTimeout(()=>{
    process.nextTick(()=>console.log('Inner nextTick in setTimeout2'))
},2000)
setTimeout(()=>console.log('TimeOut 3'),0)


process.nextTick(()=>{
    console.log('process.nextTick 1')
})
process.nextTick(()=>{
    console.log('process.nextTick 2')
    process.nextTick(()=>{
        console.log('process.nextTick inside process.nextTick2')
    })
    setTimeout(()=>console.log('setTimeout in nextTick2'),0) ;
    Promise.resolve().then(()=>{
        console.log('resolved promise in nextTick2')
    })
}) 
process.nextTick(()=>{
    console.log('process.nextTick 3')
})

Promise.resolve().then(()=>{
    console.log('resolved promise 1')
})
Promise.resolve().then(()=>{
    console.log('resolved promise 2')
    process.nextTick(()=>{
        console.log('process.nextTick inside resolve promise 2')
    })
})
Promise.resolve().then(()=>{
    console.log('resolved promise 3')
})

console.log('task2')


