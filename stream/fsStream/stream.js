console.log("streams") ;

const fs = require('node:fs') ;


const readableStream = fs.createReadStream('./file1.txt',{
    encoding:'utf-8',
    highWaterMark:2
})  ;

const writableStream = fs.createWriteStream('./file2.txt') ;

// readableStream.on('data',(chunk)=>{
//     console.log(chunk) ;
//     writableStream.write(chunk)
// } )

//Make use of pipe Method ,

readableStream.pipe(writableStream) ;

//Pipe method return the destination Stream , That why we can chain the method ..
//bt , destination stream should be readable , duplex or transform . In our case it is writable . so we can't chain

//now

const zLib = require('node:zlib'); 

const gzip  = zLib.createGzip() ;

readableStream.pipe(gzip).pipe(fs.createWriteStream('file.txt.gz'))

