import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormEncontreRoutingModule } from './form-encontre-routing.module';
import { ContactoEncontreComponent } from './components/contacto-encontre/contacto-encontre.component';
import { UbicacionEncontreComponent } from './components/ubicacion-encontre/ubicacion-encontre.component';
import { InfoEncontreComponent } from './components/info-encontre/info-encontre.component';
import { PaginaEncontreComponent } from './pages/pagina-encontre/pagina-encontre.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ContactoEncontreComponent,
    UbicacionEncontreComponent,
    InfoEncontreComponent,
    PaginaEncontreComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormEncontreRoutingModule,
    FormsModule,
    ReactiveFormsModule
   
    
    
  ]
})
export class FormEncontreModule { }
