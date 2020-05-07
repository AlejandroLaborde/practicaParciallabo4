import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/services/actor.service';
import { peliculas } from 'src/app/models/peliculas';
import { FormControl, FormGroup, Validators, FormArray  } from '@angular/forms';
import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css'],
})
export class PeliculaAltaComponent implements OnInit {

  actores;
  formulario;
  datosFirebase;
  actorPeli;
  constructor( private actoresService:ActorService,
               private peliculasService: PeliculasService
               ) { }

  ngOnInit(): void {

   

    this.actores = this.actoresService.obtenerActores();

    this.formulario = new FormGroup({
      Nombre: new FormControl(null,[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      tipo: new FormControl('',[
        Validators.required,
       
        ]),
        fechaEstreno: new FormControl('',[
          Validators.required,
        ]),
      cantidadPublico: new FormControl([
        Validators.required,
        Validators.min(10),
        Validators.max(500)
      ]),
    });




  }
  onSubmit() {
    
    if( this.formulario.valid && this.actorPeli ){
      console.log(this.formulario.value);
      const aux = new peliculas( 
        this.peliculasService.obtenerId(),
        this.formulario.value.Nombre,
        this.formulario.value.tipo,
        this.formulario.value.fechaEstreno,
        this.formulario.value.cantidadPublico,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeU642BnF4VE04uUJl4mFKMc95t6F8uDsV-e-3cD5B0cX2MRpn&usqp=CAU',[
          this.actorPeli,
        ]

       );
       alert("Se dio de alta Pelicula");
      this.peliculasService.altaPelicula( aux );
      this.formulario.reset();
      this.actorPeli=null;
    }else{
      alert("faltan campos por cargar");
    }

  }

  actorSeleccionado( event ){
    this.actorPeli = event;
  }

  muestra(a){
    console.log(a);
  }
  alta(){

  }


 

}
