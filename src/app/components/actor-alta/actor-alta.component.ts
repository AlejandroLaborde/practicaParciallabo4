import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { pais } from 'src/app/models/pais';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  paises:pais[];
  constructor( private paisesService:PaisesService ) { }

  ngOnInit(): void {
    this.paises = this.paisesService.obtenerPaises();
  }

}
