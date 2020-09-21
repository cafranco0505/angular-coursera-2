import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from '../models/destino-viajes.models';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos: DestinoViaje[];
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  constructor() {
    this.destinos = [];
  }

  ngOnInit(): void {
  }

  Agregado(d: DestinoViaje) {
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  elegido(d: DestinoViaje){
    this.destinosApiClient.getAll().forEach(x => x.setSelected(false);
    d.setSelected(true);
  }

}
