const cumplio = false;
const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(cumplio){
            resolve('Promesa cumplida');
        }
        else{
            reject('Promesa rechazada');
        }
        
    },3000)
})

const exito = (valor) =>{
    console.log(valor);
};

const rechazo = (razon) =>{
    console.log(razon);
};

 promise.then(exito,rechazo);