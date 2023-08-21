console.log('num') ;

let num = 255 ;

let hex = num.toString(16) ;
let binary = +num.toString(2);
let octal = +num.toString(8);
let nnn = +num.toString(36) ;
let octo = 0o22 ;
let num1 = +octo.toString()
console.log({
    hex,binary,octal,nnn,num1
})
console.log(0xff) ;
console.log(0b11111111) ;
console.log(0o11111111) ;

let octa = parseInt(octal ,   8) ;

let parseHex = parseInt('2n9c',36)
console.log(parseHex)
console.log(octa)


//

console.log('jayed'.codePointAt(4))
console.log('jayed'.charCodeAt(4))
console.log(String.fromCodePoint(106))