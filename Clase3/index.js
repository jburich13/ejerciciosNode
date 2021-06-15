async function imprimirPalabras(texto = "", tiempo = 1000) {
    const promise = await new Promise((resolve, reject) => {
        let i = 0;
        let texto2 = texto.split(" ")
        const intervalo = setInterval(() => {
            console.log(texto2[i])
            i++
            if (texto2.length == i) {
                clearInterval(intervalo)
            }
        }, tiempo)
    })
    return promise
}

imprimirPalabras("Hola como estas")
imprimirPalabras("Juan me llamo yo", 6000)
imprimirPalabras("Haciendo el curso de coder", 18000)