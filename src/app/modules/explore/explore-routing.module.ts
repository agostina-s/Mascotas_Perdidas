import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { FormEncontreComponent } from './pages/form-encontre/form-encontre.component';
import { FormPublicarComponent } from './pages/form-publicar/form-publicar.component';
import { PublicacionComponent } from './pages/publicacion/publicacion.component';
import { CardsComponent } from './pages/cards/cards.component';

const routes: Routes = [
    //rutas secundarias
    {path: 'busqueda', component: BusquedaComponent},
    {path: 'form-encontre', component: FormEncontreComponent},
    {path: 'form-publicar', component: FormPublicarComponent},
    {path: 'publicacion', component: PublicacionComponent},
    {path:'cards',component:CardsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
