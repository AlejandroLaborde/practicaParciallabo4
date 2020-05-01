import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { peliculas } from '../models/peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  host= 'https://parciallabo4.firebaseio.com/';
  peliculas: peliculas[];
  constructor( private http: HttpClient) { 


    this.peliculas = [
      new peliculas(1,'Pelicula1','terror','26/04/1995',350,'https://assets.show.news/__export/1569122473417/sites/debate/img/2019/09/21/1_13_crop1569122444535.jpg_943222218.jpg'),
      new peliculas(2,'Pelicula2','comedia','27/04/2000',250,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgWSpa6zNZlmEjtV2fqHrJYGKCchlD5WL72dZmH_B9zMc5ykXD&usqp=CAU'),
      new peliculas(3,'Pelicula3','amor','28/04/2001',1000,'https://kaliyugadistro.cl/wp-content/uploads/2019/01/somos-normandie-mil-peliculas-360x360.jpg'),
      new peliculas(4,'Pelicula4','otros','29/04/2010',300,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUnDoQXiQJqOnL6aEYq4c3KLiF0Gs87tDgqvpgixoHYF1lstmU&usqp=CAU'),
    ]
    localStorage.setItem('peliculas',JSON.stringify(this.peliculas));

  }


  altaPelicula(){


  }

  obtenerPeliculas(){
    
    return JSON.parse(localStorage.getItem('peliculas'));
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
