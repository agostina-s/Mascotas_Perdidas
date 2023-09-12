import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormEncontreRoutingModule } from './form-encontre-routing.module';
import { ContactoEncontreComponent } from './components/contacto-encontre/contacto-encontre.component';
import { UbicacionEncontreComponent } from './components/ubicacion-encontre/ubicacion-encontre.component';
import { InfoEncontreComponent } from './components/info-encontre/info-encontre.component';
import { PaginaEncontreComponent } from './pages/pagina-encontre/pagina-encontre.component';


@NgModule({
  declarations: [
    ContactoEncontreComponent,
    UbicacionEncontreComponent,
    InfoEncontreComponent,
    PaginaEncontreComponent
  ],
  imports: [
    CommonModule,
    FormEncontreRoutingModule
  ]
})
export class FormEncontreModule { }
