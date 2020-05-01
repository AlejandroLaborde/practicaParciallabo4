import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }


  onClick( ruta: string ){
    
    switch(ruta){

      case 'peliculaListado':
        this.router.navigate(['peliculas/listado']);
      break;

      case 'busqueda':
        this.router.navigate(['busqueda']);
      break;
      
      case 'actorListado':
        this.router.navigate(['actor/listado']);
      break;

      case 'altaPelicula':
        this.router.navigate(['peliculas/alta']);
      break;

    }
  }

}
