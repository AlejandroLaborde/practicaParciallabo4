export class pais{

    nombre:string;
    capital:string;
    flag:string;
    poblacion:string;
    id:number;
    

    constructor( nombre:string, capital:string, poblacion:string, flag:string ,id?:number){

        this.nombre=nombre;
        this.capital=capital;
        this.flag=flag;
        this.poblacion=poblacion;
        if(id){
            this.id=id;
        }
    }
}