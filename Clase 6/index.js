const fs = require("fs")
const productos = [{
    title:"Producto"+getRandom(0,11),
    price:"Precio: $"+ getRandomFloat(0,1000),
    thumbnail:"Img"
},{
    title:"Producto"+getRandom(0,11),
    price:"Precio: $"+ getRandomFloat(0,1000),
    thumbnail:"Img"
},{
    title:"Producto"+getRandom(0,11),
    price:"Precio: $"+ getRandomFloat(0,1000),
    thumbnail:"Img"
}]
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function getRandomFloat(min, max) {
    return Number((Math.random() * (max - min) + min).toFixed(2));
}
class Archivo{
    nombreArchivo;

    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo
    }




    guardar(){
        for (let i =0;i<productos.length;i++){
            productos[i].id=i+1
        }
        fs.writeFile(this.nombreArchivo,JSON.stringify(productos),error=>{
            if(error){
                console.log("ALGO SE ROMPIO"+ error.stack)
            } else arch.leer();
        })
    }
    leer(){
        fs.readFile(this.nombreArchivo, 'utf-8', (error, contenido) => {
            if (error) {
                console.log('error:', error.message)
            } else {
                console.log(JSON.parse(contenido))
            }
        });
    }

    borrar(){
        fs.unlink(this.nombreArchivo, (error) => {
            if (error) {
                console.log('error:', error)
            } else {
                console.log('archivo borrado!');
            }
        });
    }
}


const arch  = new Archivo("Clase 6/Archivo.txt")
arch.guardar();
//arch.leer()
//arch.borrar();
