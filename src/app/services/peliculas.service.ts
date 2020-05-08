import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { peliculas } from '../models/peliculas';
import { AngularFirestore, AngularFirestoreCollection,} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Actor } from '../models/actor';
import { pais } from '../models/pais';

@Injectable({
  providedIn: 'root'
  
})
export class PeliculasService {

//  host= 'https://parciallabo4.firebaseio.com/';
  datosFirebase: AngularFirestoreCollection<peliculas>;
  peliculas: peliculas[];
 
  constructor( private http: HttpClient,
               private afs: AngularFirestore) {
                 
    this.peliculas = [
      new peliculas(1,'Pelicula1','terror','26/04/1995',350,'https://assets.show.news/__export/1569122473417/sites/debate/img/2019/09/21/1_13_crop1569122444535.jpg_943222218.jpg',[
        new Actor(3,'Actor3','Apellido3','Masculino','26/04/2100','https://www.filo.news/__export/1573818445039/sites/claro/img/2019/11/15/federico_ayos_1.jpg_1359985867.jpg',
        new pais('Argentina','Buenos Aires','43590400',"https://restcountries.eu/data/arg.svg")),
        new Actor(4,'Actor4','Apellido4','Masculino','26/04/1800','https://assets.show.news/__export/1580263296104/sites/debate/img/2020/01/28/1_3_crop1580263224131.jpg_1694538543.jpg',
        new pais('Argentina','Buenos Aires','43590400',"https://restcountries.eu/data/arg.svg"))
      ]),
      new peliculas(2,'Pelicula2','comedia','27/04/2000',250,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgWSpa6zNZlmEjtV2fqHrJYGKCchlD5WL72dZmH_B9zMc5ykXD&usqp=CAU',[
        new Actor(1,'Actor1','Apellido1','Femenino','26/04/1995','https://www.filo.news/__export/1576617859259/sites/claro/img/2019/12/17/0_1.jpeg_1359985867.jpeg',
        new pais('Argentina','Buenos Aires','43590400',"https://restcountries.eu/data/arg.svg")),
        new Actor(2,'Actor2','Apellido2','Femenino','26/04/2000','https://assets.soycarmin.com/__export/1435188582376/sites/debate/img/celebs/2015/06/24/img_2082.jpg_943222218.jpg',
        new pais('Argentina','Buenos Aires','43590400',"https://restcountries.eu/data/arg.svg"))
      ]),
      new peliculas(3,'Pelicula3','amor','28/04/2001',1000,'https://kaliyugadistro.cl/wp-content/uploads/2019/01/somos-normandie-mil-peliculas-360x360.jpg',[
        new Actor(2,'Actor2','Apellido2','Femenino','26/04/2000','https://assets.soycarmin.com/__export/1435188582376/sites/debate/img/celebs/2015/06/24/img_2082.jpg_943222218.jpg',
        new pais('Argentina','Buenos Aires','43590400',"https://restcountries.eu/data/arg.svg")),
      new Actor(3,'Actor3','Apellido3','Masculino','26/04/2100','https://www.filo.news/__export/1573818445039/sites/claro/img/2019/11/15/federico_ayos_1.jpg_1359985867.jpg',
      new pais('Argentina','Buenos Aires','43590400',"https://restcountries.eu/data/arg.svg"))
      ]),
      new peliculas(4,'Pelicula4','otros','29/04/2010',300,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUnDoQXiQJqOnL6aEYq4c3KLiF0Gs87tDgqvpgixoHYF1lstmU&usqp=CAU',[
        new Actor(4,'Actor4','Apellido4','Masculino','26/04/1800','https://assets.show.news/__export/1580263296104/sites/debate/img/2020/01/28/1_3_crop1580263224131.jpg_1694538543.jpg',
        new pais('Argentina','Buenos Aires','43590400',"https://restcountries.eu/data/arg.svg"))
      ]),
    ];
    localStorage.setItem('peliculas',JSON.stringify(this.peliculas));
  }


  altaPelicula( peli: peliculas ){
    
    this.peliculas.push(peli);
    localStorage.setItem('peliculas',JSON.stringify(this.peliculas));
    
  }

  obtenerPeliculas(){
    return JSON.parse(localStorage.getItem('peliculas'));
  }

  obtenerId(){
    let minimo=0;
    this.peliculas.forEach(element => {
      if(element.id > minimo)
      {
        minimo = element.id;
      }
    });
    return minimo + 2;
  }

  eliminarPelicula( id ){

      let idEliminar;
      for (let index = 0; index < this.peliculas.length; index++) {
        if( id == this.peliculas[index].id ){
          idEliminar = index;
        }
      }
      this.peliculas.splice(idEliminar,1);
      localStorage.setItem('peliculas',JSON.stringify(this.peliculas));
  }
}

