import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
// import { FormPublicarComponent } from './pages/form-publicar/form-publicar.component';
// import { FormEncontreComponent } from './pages/form-encontre/form-encontre.component';
import { PublicacionComponent } from './pages/publicacion/publicacion.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';


@NgModule({
  declarations: [
    PublicacionComponent,
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    ExploreRoutingModule
  ]
})
export class ExploreModule { }
