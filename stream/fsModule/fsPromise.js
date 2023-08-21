console.log('FSPromise') ; 

const fs =  require('node:fs/promises') ;

 fs.readFile('./greet.text' , 'utf-8')
                        .then((data)=>console.log(data))
                        .catch(err=>console.log(err))

//or

async function readFile(file){
    try{
        const data = await fs.readFile(file , 'utf-8')
        console.log(data)
    } catch(err) {
        console.log(err)
    }
}

readFile('./file.text')

// 
fs.writeFile('./written.text' , 'Hey Promise Writing file')
            .then(()=>console.log('File is written'))
            .catch(err=>console.log(err))


async function writeFile(filename){
    try{
        fs.writeFile(filename,' I m Jayed Bin Nazir')
        console.log('File written By Async Syntex')
    } catch(err){
        console.log(err)
    }
}

writeFile('./asyncWriteFile.text')