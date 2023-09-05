import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginapublicarComponent } from './pages/paginapublicar/paginapublicar.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { InfomascotaComponent } from './Components/infomascota/infomascota.component';
import { UbicacionComponent } from './Components/ubicacion/ubicacion.component';

const routes: Routes = [
  {path:"contacto",component:ContactoComponent},
  {path:"infomascota",component:InfomascotaComponent},
  {path:"ubicacion",component:UbicacionComponent},
  {path:"paginapublicar",component:PaginapublicarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormpublicarRoutingModule { }
