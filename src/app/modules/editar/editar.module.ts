import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarRoutingModule } from './editar-routing.module';
import { EditarmascotaComponent } from './pages/editarmascota/editarmascota.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditarmascotaComponent
  ],
  imports: [
    CommonModule,
    EditarRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditarModule { }
