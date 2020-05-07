import { Component, OnInit, Input } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Input() paises;
  constructor( private paisesS: PaisesService) { }

  ngOnInit(): void {
  
  }

}
