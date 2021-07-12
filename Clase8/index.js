const express = require("express")
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const port = 8080
let acID=0

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
let productos = [
    {
        title:"Producto"+getRandom(0,100),
        price:"Precio: $"+getRandom(0,1001),
        thumbnail:"Img",
        id:0},
    {
        title:"Producto"+getRandom(0,100),
        price:"Precio: $"+getRandom(0,1001),
        thumbnail:"Img",
        id:1
    }, {
        title:"Producto"+getRandom(0,100),
        price:"Precio: $"+getRandom(0,1001),
        thumbnail:"Img",
        id:2
    }]

const productoAGuardar = {
    title:"Producto"+getRandom(0,100),
    price:"Precio: $"+getRandom(0,1001),
    thumbnail:"Img",
    id:3
}

app.get("/api/productos/listar",(req,res)=>{
    if(productos.length===0){
        res.json({error:"No hay productos cargados"})
    } else res.json(productos)

})

app.get("/api/productos/listar/:id",(req,res)=>{
    productos.forEach(element =>{
        if(element.id ===req.params.id){
            res.json(productos[req.params.id])
        } else res.json({error:"Producto no encontrado"})
    })

})
app.post("/api/productos/guardar",(req,res)=>{
    productos.push(productoAGuardar)
    res.json(productoAGuardar)
})

app.listen(port,()=>console.log("Escuchando puerto "+port))
