import { Component, OnInit, Input } from '@angular/core';
import { peliculas } from 'src/app/models/peliculas';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActorService } from 'src/app/services/actor.service';
import { Actor } from 'src/app/models/actor';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  peliculas;
  detallePelicula : peliculas;
  actores: Actor[];
  constructor( private peliculasService:PeliculasService, private actoresService: ActorService) { }

  ngOnInit(): void {
    this.peliculas = this.peliculasService.obtenerPeliculas();
    this.actores = this.actoresService.obtenerActores();
  }

  verDetalle(event){
    this.detallePelicula = event;
    this.actores = event.actor;
  }

}
