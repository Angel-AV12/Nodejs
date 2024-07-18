const http = require('http');
const servidor = http.createServer((req,res)=>{
    console.log("===> req(solicitud)")
    console.log(res.statusCode)
    res.statusCode= 404;
    res.setHeader('content-type','application/json')
    console.log(res.getHeaders)
    console.log(res.statusCode)
    res.end("Hello world")
});

const PORT= 3000;
servidor.listen(PORT,()=>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}...`)
});