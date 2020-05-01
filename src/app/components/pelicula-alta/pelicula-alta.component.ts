import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/services/actor.service';
import { peliculas } from 'src/app/models/peliculas';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  actores;
  formulario;
  constructor( private actoresService:ActorService) { }

  ngOnInit(): void {
    this.actores = this.actoresService.obtenerActores();

    this.formulario = new FormGroup({
      Nombre: new FormControl(''),
      tipo: new FormControl(''),
      fechaEstreno: new FormControl(''),
      cantidadPublico: new FormControl(''),
    });




  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.formulario.value);
  }

  alta(){

  }


 

}
