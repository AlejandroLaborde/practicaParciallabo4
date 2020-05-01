import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { peliculas } from 'src/app/models/peliculas';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Output() eliminarPelicula = new EventEmitter()
  @Input() detallePelicula:peliculas
  constructor() { }

  ngOnInit(): void {
  }

  borrarPelicula(){
    
    this.eliminarPelicula.emit ( this.detallePelicula.id);
    this.eliminarPelicula=null;
  }
}
