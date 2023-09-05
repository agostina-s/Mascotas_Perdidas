import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormpublicarRoutingModule } from './formpublicar-routing.module';
import { InfomascotaComponent } from './Components/infomascota/infomascota.component';
import { UbicacionComponent } from './Components/ubicacion/ubicacion.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { PaginapublicarComponent } from './pages/paginapublicar/paginapublicar.component';


@NgModule({
  declarations: [
    InfomascotaComponent,
    UbicacionComponent,
    ContactoComponent,
    PaginapublicarComponent
  ],
  imports: [
    CommonModule,
    FormpublicarRoutingModule
  ]
})
export class FormpublicarModule { }
