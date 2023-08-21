require('./superman');
require('./batman') ;

const {substracts,adds} = require('./math') ;

console.log({adds,substracts})

const add=(a,b)=>{
    console.log(`indexAdd`,a+b)
}
const substract=(a,b)=>{
    console.log(`indexSubs`,a-b)
}

add(5,5) ;
substract(5,5);

adds(100,100);
substracts(200,100)
const data = require('./data.json')
const Superhero  = require('./superhero');
const superhero  = new Superhero('batman')
console.log(superhero.getName());
superhero.setName('superman');
console.log(superhero.getName());

const NewSuperhero = require('./superhero');
const newSuperhero = new NewSuperhero('batman')
console.log(newSuperhero.getName())
console.log({data})
