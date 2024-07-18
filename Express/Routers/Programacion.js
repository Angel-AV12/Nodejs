const express = require('express');
const routerProgramacion = express.Router();
const {programacion} = require('../datos/cursos').cursos;
routerProgramacion.use(express.json())

routerProgramacion.get("/",(req,res)=>{
    res.send(JSON.stringify(programacion));
})

routerProgramacion.get('/:lenguaje',(req,res)=>{
    const lenguaje = req.params.lenguaje;
    const result = programacion.filter(curso => curso.lenguaje === lenguaje);
    if(result.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${result}`)
    }
    if(req.query.ordenar === 'vistas'){
     return res.send(JSON.stringify(result.sort((a,b)=>b.vistas - a.vistas)))
    }
    res.send(JSON.stringify(result))

})

routerProgramacion.get('/:lenguaje/:nivel',(req,res)=>{
    const  lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultado =  programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
    if(resultado.length === 0){
        return res.status(404).send(`No se encuentra el curso ${lenguaje} de nivel ${nivel}`)
    }
    res.send(JSON.stringify(resultado))
    
})


routerProgramacion.post("/", (req,res)=>{
    let nuevo = req.body;
    programacion.push(nuevo)
    res.send(JSON.stringify(programacion));

})

routerProgramacion.put("/:id",(req,res)=>{
    const actualizar = req.body;
    const id = req.params.id;
    const indice = programacion.findIndex(curso=>curso.id == id);
    if(indice >= 0){
programacion[indice] = actualizar;
    }
    res.send(JSON.stringify(programacion))

})

routerProgramacion.patch('/:id', (req,res)=>{
    const info =  req.body;
    const id = req.params.id;
    const indice  = programacion.findIndex(curso=> curso.id == id)
    if(indice>= 0){
        const modificarCurso = programacion[indice];
        Object.assign(modificarCurso,info)
    }
    res.send(JSON.stringify(programacion));
})

routerProgramacion.delete('/:id',(req,res)=>{
    const id = req.params.id;
    const indice = programacion.findIndex(curso=>curso.id==id);
    if(indice>=0){
        programacion.slice(indice,1);
    }
    res.send(JSON.stringify(programacion));
})


module.exports = routerProgramacion;
