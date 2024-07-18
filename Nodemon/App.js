const http = require('http')
const servido = http.createServer((req,res)=>{
    res.end('Hola, freecodecamp');
})

const PORT = 3000;
servido.listen(PORT, ()=>{
    console.log(`El servidor est escuchando en el puerto ${PORT}`)
})