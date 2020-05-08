import { Component, OnInit, Input } from '@angular/core';
import { Actor } from 'src/app/models/actor';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.css']
})
export class DetalleActorComponent implements OnInit {

  @Input() actor:Actor;
  constructor() { }

  ngOnInit(): void {
  }

}
