import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.css']
})
export class PaisesListadoComponent implements OnInit {

  paisesServicio;
  constructor( private paisesService:PaisesService ) { }

  ngOnInit(): void {
    this.paisesService.obtenerPaises().subscribe( resp=>{
      console.log(resp);
      this.paisesServicio = resp;
    })
  }

}
