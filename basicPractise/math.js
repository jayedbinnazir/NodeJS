

const adds=(a,b)=>{
    console.log(`MathAdd`,a+b)
}
const substracts=(a,b)=>{
    console.log(`MathSubs`,a-b)
}

adds(10,10) ;
substracts(20,5) ;
console.log('all math code is executed')

module.exports = {
    adds,
    substracts,
}

