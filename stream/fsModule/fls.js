console.log('fsModule') ;
const fs =  require('node:fs')
const fileContent = fs.readFileSync('./file.text', 'utf-8') ;
const fileContentAsync = fs.readFile('./file.text','utf-8',(err, data)=>{
    if(err){
        console.log(err)
    } else {
        console.log(data)
    }
})

console.log(fileContent)


fs.writeFileSync('./greet.text' , 'Hello World') ;

fs.writeFile('./greet.text' , ' Hello Vishwas',{ flag:'a' },(err,data)=>{
    if(err){
        console.log(err)
    } else {
        console.log('File written successfully')
    }
})