export class Suma{
    private a:number 
    private b:number
    public constructor(a:number, b:number){
            this.a = a;
            this.b = b;
    }
    public resultado(){
        return this.a+this.b
    }
}