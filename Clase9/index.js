const express = require("express")
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const port = 8080
const routerProductos = express.Router()
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


app.get("/",(req, res)=>{
    res.sendFile(__dirname+"/index.html")
})

routerProductos.get("/listar",(req,res)=>{
    if(productos.length===0){
        res.json({error:"No hay productos cargados"})
    } else res.json(productos)

})

routerProductos.get("/listar/:id",(req,res)=>{
    productos.forEach(element =>{
        if(element.id ===req.params.id){
            res.json(productos[req.params.id])
        } else res.json({error:"Producto no encontrado"})
    })

})
routerProductos.post("/guardar",(req,res)=>{
    const productoID = req.body
    productoID.id = productos.length
    productos.push(productoID)
    res.json(productoID)
})

routerProductos.delete('/borrar/:id', (req, res) => {
    productos = productos.filter((producto) => producto.id != req.params.id)
    res.json(productos)
})

routerProductos.put('/actualizar/:id', (req, res) => {
    for (let i=0; i < productos.length; i++) {
        console.log(`for ${i}`)
        if (productos[i].id == req.params.id) {
            productos[i] = productoAGuardar
        }
    }
    res.send(productos)
})
app.use('/api/productos', routerProductos)

app.listen(port,()=>console.log("Escuchando puerto "+port))
