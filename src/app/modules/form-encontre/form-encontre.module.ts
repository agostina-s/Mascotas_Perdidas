import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormEncontreRoutingModule } from './form-encontre-routing.module';
import { InfoMascotaComponent } from './components/info-mascota/info-mascota.component';


@NgModule({
  declarations: [
    InfoMascotaComponent
  ],
  imports: [
    CommonModule,
    FormEncontreRoutingModule
  ]
})
export class FormEncontreModule { }
