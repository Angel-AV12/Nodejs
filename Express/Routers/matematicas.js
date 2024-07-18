const express = require('express')
const routerMatematicas = express.Router();
const {matematicas} = require('../datos/cursos').cursos;


routerMatematicas.get("/",(req,res)=>{
    res.send(JSON.stringify(matematicas));
})

routerMatematicas.get("/:tema",(req,res)=>{
    const tema = req.params.tema;
    const resultado =  matematicas.filter(exa => exa.tema === tema);
    if(resultado.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }
    res.send(JSON.stringify(resultado));
})

module.exports = routerMatematicas;