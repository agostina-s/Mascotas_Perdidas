import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';
import { CardmascotasComponent } from './cardmascotas/cardmascotas.component';


@NgModule({
  declarations: [
    CardmascotasComponent
  ],
  imports: [
    CommonModule,
    MascotasRoutingModule
  ]
})
export class MascotasModule { }
