setTimeout(()=>console.log('timeout1'),0)

setImmediate(()=>console.log('immidiate'))

for (let i=0 ; i<=20000000 ; i++){}

//The execution order is not  garaunted

