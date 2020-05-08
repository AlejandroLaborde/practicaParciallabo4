import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { pais } from 'src/app/models/pais';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActorService } from 'src/app/services/actor.service';
import { Actor } from 'src/app/models/actor';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  paises:pais[];
  formulario:FormGroup;
  paisSeleccionado:pais;

  constructor( private paisesService:PaisesService, private actoresService:ActorService ) { }

  ngOnInit(): void {
    this.paises = this.paisesService.obtenerPaises();


    this.formulario = new FormGroup({
      Nombre: new FormControl(null,[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      Apellido: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
        ]),
        FechaNacimiento: new FormControl('',[
          Validators.required,
        ]),
        sexo: new FormControl('',[
        Validators.required,
        ]),
    });


  }

  onSubmit(){
    if(!this.paisSeleccionado){
      alert("Debe seleccionar un pais"); 
    }else{
      console.log(this.formulario);
      //let id = this.actoresService.obtenerId();
      let id =5;
      // tslint:disable-next-line: no-unused-expression
      
      this.actoresService.altaActor(
        new Actor(id,
          this.formulario.value.Nombre,
          this.formulario.value.Apellido,
          this.formulario.value.sexo,
          this.formulario.value.FechaNacimiento,
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeU642BnF4VE04uUJl4mFKMc95t6F8uDsV-e-3cD5B0cX2MRpn&usqp=CAU',
          this.paisSeleccionado)
      );

      this.formulario.reset();
      this.paisSeleccionado=null;
    }
  }

  seleccionoPais(paisS){

    this.paisSeleccionado = paisS;
  }

}
