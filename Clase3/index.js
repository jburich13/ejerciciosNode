async function imprimirPalabras(texto = "", tiempo = 1000) {
    const promise = new Promise((resolve, reject) => {
        let i = 0;
        let texto2 = texto.split(" ")

        const intervalo = setInterval(() => {
            console.log(texto2[i])
            i++
            if (texto2.length == i) {
                clearInterval(intervalo)
                resolve(texto2.length);

            }
        }, tiempo)
    })
    return promise
}


async function controlador(){
    let cont = 0
    await imprimirPalabras("Hola como estas").then(result=>cont=cont+result)
    await imprimirPalabras("Q onda",2000).then(result=>cont=cont+result)
    await imprimirPalabras("Haciendo el curso de CoderHouse",2000).then(result=>cont=cont+result)
    console.log("Palabras totales: "+cont)
}


controlador();


