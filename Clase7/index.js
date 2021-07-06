const express = require("express")
const fs = require("fs")
const app = express()
const port  = 8080

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
const server = app.listen(port,()=>{
    console.log("Server funcionando en port: "+port)
})

let items=0, item=0;



app.get("/items",(req, res)=>{
    fs.readFile("Clase7/Archivo.txt", 'utf-8', (error, contenido) => {
        if (error) {
            console.log('error:', error.message)
        } else {
            res.json({items:JSON.parse(contenido), cantidad:JSON.parse(contenido).length})
            items++
        }
    })
})
app.get("/item-random",(req, res)=>{
    fs.readFile("Clase7/Archivo.txt", 'utf-8', (error, contenido) => {
        if (error) {
            console.log('error:', error.message)
        } else {
            res.json({item: JSON.parse(contenido)[getRandom(0,JSON.parse(contenido).length)]})
            item++
        }
    })
})

app.get("/visitas",(req, res)=>{
    fs.readFile("Clase7/Archivo.txt", 'utf-8', (error, contenido) => {
        if (error) {
            console.log('error:', error.message)
        } else {
            res.json({visitas:{items:items,item:item}})
        }
    })
})
