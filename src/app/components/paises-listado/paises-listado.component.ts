import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { pais } from 'src/app/models/pais';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.css']
})
export class PaisesListadoComponent implements OnInit {

  paisesServicio;
  paisSeleccionado:pais;
  constructor( private paisesService:PaisesService ) { }

  ngOnInit(): void {
    this.paisesServicio = this.paisesService.obtenerPaises();
  }

  verDetalles( pais ){
    this.paisSeleccionado = pais;
  }

  deshabilitandoPais( paisADesabilitar ){
    console.log(paisADesabilitar);
    this.paisesService.deshabilitarPais( paisADesabilitar );
    this.paisesServicio=this.paisesService.obtenerPaises();
  }

}
