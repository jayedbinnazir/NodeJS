console.log('event-module') ;


EventEmitter = require('node:events') ;

const emitter = new EventEmitter() ;

emitter.on('order-pizza' , (size,topping)=>{
    console.log(`Backing a pizzza of ${size} and topping with ${topping} `)
})
emitter.on('order-pizza',(size)=>{
    if(size==='large'){
        console.log('serving a complementary drink')
    }
})
emitter.emit('order-pizza' , 'large' , 'mushroom' )






const PizzaShop = require('./extendinEvent');
const Drink = require('./drink')
const drinkingmachine = new Drink()
const pizzashop = new PizzaShop();

pizzashop.on('order',(size,topping)=>{
    console.log(`Ordered from custom Piazza shop, a ${size} pizza with topping ${topping} `)
    drinkingmachine.serveDrink(size)
})

pizzashop.order('large', 'mutton');
pizzashop.displayOrderNumber()