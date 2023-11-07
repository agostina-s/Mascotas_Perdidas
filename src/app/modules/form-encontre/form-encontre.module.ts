import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormEncontreRoutingModule } from './form-encontre-routing.module';
import { ContactoEncontreComponent } from './components/contacto-encontre/contacto-encontre.component';
import { UbicacionEncontreComponent } from './components/ubicacion-encontre/ubicacion-encontre.component';
import { InfoEncontreComponent } from './components/info-encontre/info-encontre.component';
import { PaginaEncontreComponent } from './pages/pagina-encontre/pagina-encontre.component';
import { FormularioComponent } from '../form-publicar/Components/formulario/formulario.component';
import { FormpublicarModule } from '../form-publicar/formpublicar.module';
import { FormularioComponent } from './components/formulario/formulario.component';
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
    FormpublicarModule
   
    
    
  ]
})
export class FormEncontreModule { }
