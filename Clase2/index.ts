import {Suma} from "./Suma"
import {Resta} from "./Resta"

class Ejercicio2{
    public constructor(){

    }

    public async operaciones(){
        console.log("Suma: ",await this.operacion(12,4,"suma"))
        console.log("Resta: ", await this.operacion(12,4,"resta"))
    }

    public  operacion(a:number,b:number, operacion:string){
        if(operacion=="suma"){
        const promise = new Promise((resolve, reject)=>{
              setTimeout(()=>{
                    let suma1 = new Suma(a,b)
                    resolve(suma1.resultado())
              },2000)
          })
          return promise
        } else if(operacion=="resta") {
            const promise = new Promise((resolve, reject)=>{
                setTimeout(()=>{
                      let resta1 = new Resta(a,b)
                      resolve(resta1.resultado())
                },2000)
            })
            return promise
           
        } else return "Operacion no permitida!"
    }

    
}

let ejercicio = new Ejercicio2()
ejercicio.operaciones()