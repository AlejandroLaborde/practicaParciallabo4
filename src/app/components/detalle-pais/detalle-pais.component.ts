import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { pais } from 'src/app/models/pais';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  @Output() deshabilitarPais = new EventEmitter<pais>();
  @Input() detallePais:pais;
  constructor() { }

  ngOnInit(): void {
  }

  desabilitar(){

    this.deshabilitarPais.emit( this.detallePais );
    this.detallePais=null;
  }
}
