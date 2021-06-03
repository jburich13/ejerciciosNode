class Producto {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }

    static descuento = (porcentaje, precio) => {
        porcentaje = porcentaje / 100;
        const descuento = precio * porcentaje;
        console.log(descuento)
    }



    getNombre() {
        return this.nombre
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getCategoria() {
        return this.categoria
    }
    setNombre(categoria) {
        this.categoria = categoria;
    }
    getPrecio() {
        return this.precio
    }
    setPrecio(precio) {
        this.precio = precio;
    }
}


let producto1 = new Producto("Hola", "Autos", 3000);
Producto.descuento(20, producto1.getPrecio());


class Auto extends Producto {
    constructor(nombre, categoria, precio, puertas) {
        super(nombre, categoria, precio)
        this.puertas = puertas;
    }

    getPuertas() {
        return this.puertas
    }
    setPuertas(puertas) {
        this.puertas = puertas
    }
}

class Moto extends Producto {
    constructor(nombre, categoria, precio, ruedas) {
        super(nombre, categoria, precio)
        this.ruedas = ruedas;
    }
    getRuedas() {
        return this.ruedas
    }
    setRuedas(ruedas) {
        this.ruedas = ruedas
    }
}

const moto1 = new Moto("moto1", "Motocross", 100000, 2)
const auto1 = new Auto("auto1", "4x4", 10000000, 5)