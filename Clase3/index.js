async function imprimirPalabras(texto = "", tiempo) {
    const promise = await new Promise((resolve, reject) => {
        let texto2 = texto.split(" ")
        for (let i = 0; i < texto2.length; i++) {
            setTimeout(() => { console.log(texto2[i]) }, 10000)
        }
    })
    return promise
}
imprimirPalabras("Hola como estas", 5000)