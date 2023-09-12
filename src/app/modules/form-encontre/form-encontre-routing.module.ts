import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from '../form-publicar/Components/contacto/contacto.component';
import { InfoEncontreComponent } from './components/info-encontre/info-encontre.component';
import { ContactoEncontreComponent } from './components/contacto-encontre/contacto-encontre.component';
import { UbicacionEncontreComponent } from './components/ubicacion-encontre/ubicacion-encontre.component';
import { PaginaEncontreComponent } from './pages/pagina-encontre/pagina-encontre.component';

const routes: Routes = [
  {path:"contacto-encontre",component:ContactoEncontreComponent},
  {path:"info-encontre",component:InfoEncontreComponent},
  {path:"ubicacion-encontre",component:UbicacionEncontreComponent},
  {path:"pagina-encontre",component:PaginaEncontreComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormEncontreRoutingModule { }
