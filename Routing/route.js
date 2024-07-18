const http = require("http")
const cursos = require('./cursos')
const servidor = http.createServer((req,res)=>{
const {method} = req;
switch(method){
    case 'GET':return handlerGET(req,res);
    case 'POST': return handlerPOST(req,res);
    res.statusCode = 501;
    default:
        res.end(`El metodo usado no puede ser manejado por el servidor: ${method}`)
        break;
}
})

function handlerGET(req,res){
    const path = req.url;
    if(path==='/'){
        res.writeHead(200,{'content-type':'application/json' })
        res.statusCode = 200;
        res.end('Bienvenidos a mi primer ser y API creados con Node JS')
    }else if(path==='/cursos'){
        res.statusCode= 200;
        res.end(JSON.stringify(cursos.infoCursos))
    }
    else if(path==='/cursos/programacion'){
        res.statusCode= 200;
        res.end(JSON.stringify(cursos.infoCursos.programacion))}
        res.statusCode=404;
        res.end("El recurso solicitado no existe")
}


function handlerPOST(req,res){
    const path = req.url;
    if(path==='/cursos/programacion'){
        let body = '';
        req.on('data',cont=>{
            body+= cont.toString();
        })
        req.on('end',()=>{
            console.log(body)
            console.log(typeof body);
            body= JSON.parse(body);
            console.log(typeof body);
            res.end('El servicio recibio una solicitud POST para /cursos/programacion')
        })
        
    }
}

const PORT=3000;
servidor.listen(PORT,()=>{
    console.log(`El servidor esta escuchando en el pueto: ${PORT}`)
})