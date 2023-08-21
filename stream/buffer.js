console.log('Buffer') ;

console.log('V'.codePointAt())
console.log(+'V'.codePointAt().toString(16))

const buffer = new Buffer.from('Vishwas') ;

buffer.write('codevolution')

console.log(buffer) ; // Hexa Decimal format
console.log(buffer.toJSON())  // Numeric Format 

console.log(buffer.toString())