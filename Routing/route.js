console.log("Routing Ecercise") ;


const http = require('node:http') ;
const fs = require('node:fs') ;

const server = http.createServer((req, res)=>{
    
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.end(fs.readFileSync('./index.html','utf-8'))
    } else if(req.url==='/about'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.end(fs.readFileSync('./About.html','utf-8'))
        
    } else if(req.url==='/services'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.end(fs.readFileSync('./Servicces.html','utf-8'))
    } else {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.end('<h2>404 Not Found</h2>')
    }

})


server.listen(3000,()=>{
    console.log('Routing server is running on port 3000')
})