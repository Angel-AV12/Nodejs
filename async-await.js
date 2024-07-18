function orderProduct(product){
    return new Promise((resolve,reject)=>{
        console.log(`Ordenando ${product} de freecodecamp`);
        setTimeout(() =>{
            if(product=='tazas'){
                resolve('Ordenando una taza en freecodecamp...');
            }else{
                reject("Este producto no esta disponible actualmente...")
            }
        },2000)
    });
}


function procesarPedido(respuesta){
    return new Promise((resolve)=>{
        console.log("Procesando respuesta...");
        console.log(`La respuesta fue ${respuesta}...`);
        setTimeout(()=>{
            resolve('Gracias por tu compra. Disfruta por tu compra de producto de freecodecamp')
        },4000);
    })
}

orderProduct('tazas').then(respuesta =>{
    console.log("Respuesta recibida")
    console.log(respuesta)
    return procesarPedido(respuesta)
}).then(respuestaProcess=>{
    console.log(respuestaProcess);
}).catch(err=>{
    console.log(err);
})


async function pedido(productos){
    try {
        const respuesta = await orderProduct(productos);
        console.log('respuesta');
        const procesando = await procesarPedido(respuesta);
        console.log(procesando);    
    } catch (error) {
        console.log(error);
    }   
}

pedido('Miel')