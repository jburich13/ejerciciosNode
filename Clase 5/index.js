let http = require("http");

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomFloat(min, max) {
    return Number((Math.random() * (max - min) + min).toFixed(2));
}

let server = http.createServer((req, res) => {
    res.end(JSON.stringify({
        id: getRandom(0, 11),
        title: "Producto " + getRandom(0, 11),
        price: getRandomFloat(0, 10000),
        thumbnail: "Foto " + getRandom(0, 11)
    }))
})

let listener = server.listen(8080, () => {
    console.log("Server listo en " + listener.address().port)
})