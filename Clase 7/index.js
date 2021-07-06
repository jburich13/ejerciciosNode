const express = require("express")
const fs = require("fs")
const app = express()
const port  = 8080


const server = app.listen(port,()=>{
    console.log("Server funcionando en port: "+port)
})



app.get("/items",(req, res)=>{
    let productos;
    fs.readFile("Clase 7/Archivo.txt", 'utf-8', (error, contenido) => {
        if (error) {
            console.log('error:', error.message)
        } else {
            productos = JSON.parse(contenido)
            console.log(productos)
        }
    })
    console.log(productos)
    res.json({items:productos})
})