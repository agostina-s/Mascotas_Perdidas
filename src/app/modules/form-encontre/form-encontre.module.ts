import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormEncontreRoutingModule } from './form-encontre-routing.module';
import { InfoMascotaComponent } from './components/info-mascota/info-mascota.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';


@NgModule({
  declarations: [
    InfoMascotaComponent,
    UbicacionComponent
  ],
  imports: [
    CommonModule,
    FormEncontreRoutingModule
  ]
})
export class FormEncontreModule { }
