const express = require("express")
const hlbs =  require("express-handlebars")
const port = 8080

const app = express()

app.engine('handlebars', hlbs());
app.set("view engine", "handlebars");


app.get("/",(req,res)=>{
    res.render("home",)
})

app.listen(port,()=>console.log("Escuchando puerto  "+port))