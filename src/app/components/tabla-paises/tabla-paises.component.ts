import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { pais } from 'src/app/models/pais';


@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Output() paisSelected = new EventEmitter<pais>();
  @Input() paises;
  constructor( private paisesS: PaisesService) { }

  ngOnInit(): void {
  
  }

  seleccionPais( paisSelecionado ){
    
    this.paisSelected.emit( new pais(paisSelecionado.name, paisSelecionado.capital, paisSelecionado.population, paisSelecionado.flag) );

  }
}
