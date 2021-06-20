async function imprimirPalabras(texto = "", tiempo = 1000) {
    const promise = new Promise((resolve, reject) => {
        let i = 0;
        let texto2 = texto.split(" ")
        const intervalo = setInterval(() => {
            console.log(texto2[i])
            i++
            if (texto2.length == i) {
                clearInterval(intervalo)
                resolve();
            }
        }, tiempo)
    })
    return promise
}


async function controlador(){
    await imprimirPalabras("Hola como estas")
    await imprimirPalabras("Q onda",2000)
    await imprimirPalabras("Haciendo el curso de CoderHouse",2000)


}


controlador();


