import { Actor } from './actor';



export class peliculas{

            id :number;
            Nombre :string;
            tipo : string;//   { terror , comedia, amor ,otros }
            fechaEstreno :string;
            cantidadPublico: number;
            Foto ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeU642BnF4VE04uUJl4mFKMc95t6F8uDsV-e-3cD5B0cX2MRpn&usqp=CAU';
            actor:Actor[];


            constructor (id :number, Nombre :string, tipo : string, fechaEstreno :string,cantidadPublico: number, Foto : string,actor?:Actor[]){

                this.id=id;
                this.Nombre=Nombre;
                this.tipo=tipo;
                this.fechaEstreno=fechaEstreno;
                this.cantidadPublico=cantidadPublico;
                this.Foto = Foto;
                if(actor){
                    this.actor = actor;
                }

            }
}