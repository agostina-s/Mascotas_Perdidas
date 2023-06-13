import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { PublicacionComponent } from './pages/publicacion/publicacion.component';
import { FormPublicarComponent } from './pages/form-publicar/form-publicar.component';
import { FormEncontreComponent } from './pages/form-encontre/form-encontre.component';



@NgModule({
  declarations: [
    InicioComponent,
    BusquedaComponent,
    PublicacionComponent,
    FormPublicarComponent,
    FormEncontreComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
