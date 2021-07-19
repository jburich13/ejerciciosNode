const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const prod = require('./api/productos');
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const port = 8080
let acID=0




app.get("/api/productos/listar",(req,res)=>{
    if(prod.productos.length===0){
        res.json({error:"No hay productos cargados"})
    } else res.json(prod.productos)

})

app.get("/api/productos/listar/:id",(req,res)=>{

    if(prod.productos[req.params.id]!==undefined ){
        res.json(prod.productos[req.params.id])
    } else  res.json({error:"Producto no encontrado"})

})
app.post("/api/productos/guardar",(req,res)=>{
    prod.productos.push(req.body)
    res.json(req.body)
})


app.listen(port,()=>console.log("Escuchando puerto "+port))
