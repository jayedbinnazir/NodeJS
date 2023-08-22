console.log('ThreadPool') ;

//Synchronous Experiment ;

let crypto = require('node:crypto') ;


// let start = Date.now() ;

// crypto.pbkdf2Sync("password",'salt',100000 , 512 ,'sha512') ;
// crypto.pbkdf2Sync("password",'salt',100000 , 512 ,'sha512') ;
// crypto.pbkdf2Sync("password",'salt',100000 , 512 ,'sha512') ;
// console.log(`Hash:`, Date.now()-start)

// process.env.UV_THREADPOOL_SIZE = 4 ;
const MAX_CALLS = 2;
let start = Date.now() ;
for(let i = 0 ;  i < MAX_CALLS ; i++ ){
    crypto.pbkdf2("password", "salt" ,10000 ,512 , 'sha512',()=>{
        console.log(`Hash ${i+1}: `, Date.now()-start )
    }  )
}

