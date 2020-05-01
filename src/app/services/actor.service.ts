import { Injectable } from '@angular/core';
import { Actor } from '../models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  actores : Actor[]
  constructor( ) {
    this.actores=[
      new Actor(1,'Actor1','Apellido1','Femenino','26/04/1995','https://www.filo.news/__export/1576617859259/sites/claro/img/2019/12/17/0_1.jpeg_1359985867.jpeg'),
      new Actor(2,'Actor2','Apellido2','Femenino','26/04/2000','https://assets.soycarmin.com/__export/1435188582376/sites/debate/img/celebs/2015/06/24/img_2082.jpg_943222218.jpg'),
      new Actor(3,'Actor3','Apellido3','Masculino','26/04/2100','https://www.filo.news/__export/1573818445039/sites/claro/img/2019/11/15/federico_ayos_1.jpg_1359985867.jpg'),
      new Actor(4,'Actor4','Apellido4','Masculino','26/04/1800','https://assets.show.news/__export/1580263296104/sites/debate/img/2020/01/28/1_3_crop1580263224131.jpg_1694538543.jpg'),
    ]
    localStorage.setItem('actores',JSON.stringify(this.actores));

  }


  obtenerActores(){
    return  this.actores;
  }





}
