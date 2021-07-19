function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

class Productos {
    constructor() {
        let productos = []
    }

    productos=[
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
}

// exporto una instancia de la clase
module.exports = new Productos();