import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { peliculas } from 'src/app/models/peliculas';
import { timer, Observable } from 'rxjs';


@Component({
  selector: 'app-peliculas-listado',
  templateUrl: './peliculas-listado.component.html',
  styleUrls: ['./peliculas-listado.component.css']
})
export class PeliculasListadoComponent implements OnInit {

  peliculas: peliculas[];
  peliculaSeleccionada: peliculas;
  constructor( private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculas = this.peliculasService.obtenerPeliculas();
  }

  enviarPeliculaSeleccionada( pelicula ){
    this.peliculaSeleccionada = pelicula;
  }

  eliminar( id ){
    this.peliculasService.eliminarPelicula(id);
    this.peliculas=this.peliculasService.obtenerPeliculas();
  }
}
