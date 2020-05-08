import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/services/actor.service';
import { Actor } from 'src/app/models/actor';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  actores;
  selectedActor:Actor;
  constructor(private actorService:ActorService) { 

  }

  ngOnInit(): void {
    this.actores= this.actorService.obtenerActores();
  }

  actorSelected( seleccionado ){
    console.log(seleccionado);
    this.selectedActor = seleccionado;
  }
}
