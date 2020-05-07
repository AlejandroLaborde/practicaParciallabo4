import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { peliculas } from 'src/app/models/peliculas';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Output() peliculaSeleccionada = new EventEmitter();

  @Input() peliculas:peliculas[]; 
  constructor(  ) { }

  ngOnInit(): void {
    
  }

  verDetalles( pelicula ){
    this.peliculaSeleccionada.emit(pelicula);
  }

}
