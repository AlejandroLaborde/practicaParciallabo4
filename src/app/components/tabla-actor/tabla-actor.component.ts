import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  @Output() actorSeleccionado = new EventEmitter();
  @Input() actores;
  constructor() { }

  ngOnInit(): void {
  }

  seleccionado( actor ){
    console.log(actor);
    this.actorSeleccionado.emit( actor );
  }
}
