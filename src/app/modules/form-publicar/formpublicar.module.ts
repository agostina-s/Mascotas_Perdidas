import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormpublicarRoutingModule } from './formpublicar-routing.module';
import { PaginapublicarComponent } from './pages/paginapublicar/paginapublicar.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaginapublicarComponent,
    FormularioComponent, 
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
    FormularioComponent
  ]
})
export class FormpublicarModule { }
