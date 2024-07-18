const express = require('express');
const app = express();
const {cursos} = require('./datos/cursos')
const routerProgramacion = require("./Routers/Programacion")
app.use('/api/cursos/programacion', routerProgramacion)
const routerMatematicas = require("./Routers/matematicas")
app.use('/api/cursos/matematicas',routerMatematicas)
app.get('/', (req,res)=>{
res.send('Mi primer curso de node js')
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}`)
});

app.get("/api/cursos",(req,res)=>{
    res.send(cursos)
})

