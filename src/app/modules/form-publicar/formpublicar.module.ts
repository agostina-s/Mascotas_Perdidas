import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormpublicarRoutingModule } from './formpublicar-routing.module';
import { InfomascotaComponent } from './Components/infomascota/infomascota.component';
import { UbicacionComponent } from './Components/ubicacion/ubicacion.component';
import { ContactoComponent } from './Components/contacto/contacto.component';


@NgModule({
  declarations: [
    InfomascotaComponent,
    UbicacionComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    FormpublicarRoutingModule
  ]
})
export class FormpublicarModule { }
