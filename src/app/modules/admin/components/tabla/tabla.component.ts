import { Component } from '@angular/core';
import { Mascotas } from 'src/app/models/mascotasperdidas';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  coleccionmascotas: Mascotas [] = [];
  productoSeleccionado!: Mascotas;
}
