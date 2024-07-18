const statusDelivery = () => {
    return  Math.random() < 0.8;
}

const pizzaDelivery = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if( statusDelivery()){
            resolve("Pedido exitoso su pizza esta en camino.")
        }else{
            reject("Ocurrio un error. Por favor intente de nuevo");
        }
    },3000)
});

const handlerorder= (msmconfirm)=>{
    console.log(msmconfirm);
};

const handlerreject = (msmreject)=>{
    console.log(msmreject);
}

pizzaDelivery.then(handlerorder,handlerreject);

pizzaDelivery.then((msmconfirm)=>{
    console.log(msmconfirm);  
}).catch((msmreject)=>{
    console.log(msmreject);
});