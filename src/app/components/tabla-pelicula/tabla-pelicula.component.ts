import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Output() peliculaSeleccionada = new EventEmitter();

  @Input() peliculas; 
  constructor() { }

  ngOnInit(): void {

  }

  verDetalles( pelicula ){
    this.peliculaSeleccionada.emit(pelicula);
  }

}
