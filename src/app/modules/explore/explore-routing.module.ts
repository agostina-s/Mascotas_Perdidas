import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
// import { FormEncontreComponent } from './pages/form-encontre/form-encontre.component';
// import { FormPublicarComponent } from './pages/form-publicar/form-publicar.component';
import { PublicacionComponent } from './pages/publicacion/publicacion.component';
import { PosibleExtravioComponent } from './pages/posible-extravio/posible-extravio.component';
import { PublicacionPosibleExtravioComponent } from './pages/publicacion-posible-extravio/publicacion-posible-extravio.component';

const routes: Routes = [
    //rutas secundarias
    {path: 'busqueda', component: BusquedaComponent},
    {path: 'posible-extravio', component: PosibleExtravioComponent},
    {path: 'publicacion-posible-extravio/:id', component: PublicacionPosibleExtravioComponent},
    // {path: 'form-encontre', component: FormEncontreComponent},
    // {path: 'form-publicar', component: FormPublicarComponent},
    {path: 'publicacion/:id', component: PublicacionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
