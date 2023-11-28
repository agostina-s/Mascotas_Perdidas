import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarRoutingModule } from './editar-routing.module';
import { EditarmascotaComponent } from './pages/editarmascota/editarmascota.component';


@NgModule({
  declarations: [
    EditarmascotaComponent
  ],
  imports: [
    CommonModule,
    EditarRoutingModule
  ]
})
export class EditarModule { }
