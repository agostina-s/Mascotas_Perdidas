import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormpublicarRoutingModule } from './formpublicar-routing.module';
import { InfomascotaComponent } from './Components/infomascota/infomascota.component';
import { UbicacionComponent } from './Components/ubicacion/ubicacion.component';
import { PaginapublicarComponent } from './pages/paginapublicar/paginapublicar.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InfomascotaComponent,
    UbicacionComponent,
    PaginapublicarComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormpublicarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormpublicarModule { }
