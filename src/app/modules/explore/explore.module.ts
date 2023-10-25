import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//carousel de ngx bootstrap
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { ExploreRoutingModule } from './explore-routing.module';
// import { FormPublicarComponent } from './pages/form-publicar/form-publicar.component';
// import { FormEncontreComponent } from './pages/form-encontre/form-encontre.component';

//pagina publicacion individual
import { PublicacionComponent } from './pages/publicacion/publicacion.component';
//pagina que muestra todas las publicaciones
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
//componente card de cada publicacion
import { CardComponent } from './componentes/card/card.component';


@NgModule({
  declarations: [
    PublicacionComponent,
    BusquedaComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    CarouselModule.forRoot()
  ]
})
export class ExploreModule { }
