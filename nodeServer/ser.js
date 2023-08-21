console.log('a simple server') ;

const http = require('node:http') ;
// console.log(http)
const server = http.createServer((req,res)=>{
    res.writeHead(200 , { 'Content-Type':'text/plain' } )
    res.end('Hello Jayed')
})

server.listen(3000 , ()=>{
    console.log('Server is running on port 3000')
})

//Creating an html server

const server2 = http.createServer((req,res)=>{
    res.writeHead(200 ,{ "Content-Type":"text/html" } )
    res.end('<h1>Jayed Bin Nazir</h1>')
})

server2.listen(4000 , ()=>{
    console.log('jayed is Running on port 4000')
})

// Creating a htgml file server

const fs =  require('node:fs') ;

const server3 = http.createServer((req,res)=>{
    res.writeHead(200 ,{ "Content-Type":"text/html" } )
    const html = fs.readFileSync('./index.html' , 'utf-8')
    res.end(html)
})

server3.listen(5000 , ()=>{
    console.log('Html file is Running on port 5000')
})

// Creating a html file server with pipe method


const server4 = http.createServer((req,res)=>{
    res.writeHead(200 ,{ "Content-Type":"text/html" } )
    fs.createReadStream(__dirname + '/pipe.html',{encoding:'utf-8' , highWaterMark:2} ).pipe(res)
})

server4.listen(8000 , ()=>{
    console.log('Html file is Running on port 8000 by pipe')
})


//Server Json Data 

const server5 =  http.createServer((req, res)=>{
    const superHero = {
        fName:'Jayed',
        lName:'Bin Nazir'
    }

    res.writeHead(200 ,{"Content-Type":"application/json"} )
    res.end(JSON.stringify(superHero))
})

server5.listen(7000,()=>{
    console.log('Json Data is served on port 7000')
})


//Creating HTML Template 

const server6 = http.createServer((req,res)=>{
    res.writeHead(200 , {'Content-Type':'text/html'})
    const name = 'Jayed' ;
    const html = fs.readFileSync('./jayed.html','utf-8') ;
    res.end(html.replace('{{name}}', name))
})

server6.listen(9000 , ()=>{
    console.log('Server Html Template is running on port 9-000')
})

