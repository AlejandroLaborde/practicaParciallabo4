import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  paises;
  constructor( private paisesService:PaisesService ) { }

  ngOnInit(): void {
    this.paisesService.obtenerPaises().subscribe( resp=>{
      this.paises=resp;
    } )
  }

}
