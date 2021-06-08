class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre;
        this.apellido = apellido
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `Hola, mi nombre es ${this.nombre} y mi apellido es ${this.apellido}`
    }
    addMascotas(mascota) {
        this.mascotas.push(mascota);
    }

    getMascotas() {
        return this.mascotas.length;
    }

    addBook(books) {
        this.libros.push(books)
    }

    getBooks() {
        const soloNombres = libros.map(x => {
            return x.book
        })
        return soloNombres
    }
}

let libros = [],
    mascotas = []

const usuario1 = new Usuario("Juan", "Burich", libros, mascotas)

console.log(usuario1.getFullName())

usuario1.addMascotas("Ruffo")
usuario1.addMascotas("Umma")
console.log(usuario1.getMascotas());

usuario1.addBook({
    book: "Harry Potter",
    autor: "J.K.Rowling"
})
usuario1.addBook({
    book: "Percy Jackson",
    autor: "No me acuerdo"
})

console.log(usuario1.getBooks())