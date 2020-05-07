import { pais } from './pais';




export class Actor{

            id:number
            Nombre:string;
            apellido:string;
            sexo:string;
            FechaNacimiento:string;
            Foto= 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeU642BnF4VE04uUJl4mFKMc95t6F8uDsV-e-3cD5B0cX2MRpn&usqp=CAU';
            paisOrigen: pais;

            constructor(id:number,Nombre:string,apellido:string,sexo:string,FechaNacimiento:string,Foto:string, pais?:pais){

                this.id=id;
                this.Nombre=Nombre;
                this.apellido=apellido;
                this.sexo = sexo;
                this.FechaNacimiento = FechaNacimiento;
                this.Foto = Foto;
                if( pais ){
                    this.paisOrigen=pais;
                }
            }
}