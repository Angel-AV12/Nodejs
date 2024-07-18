const EventEmitter = require('events');
const emisorProducts = new EventEmitter();
emisorProducts.on('compra',(money,num)=>{
    console.log(`Se realizo una compra por ${money}.`);
    console.log(`La cantidad comprada es: ${num}.`);
})

emisorProducts.emit("compra",400 , 3);
emisorProducts.emit("compra",400, 3);
emisorProducts.emit("compra",400, 5);
