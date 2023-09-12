import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiperfilComponent } from './pages/miperfil/miperfil.component';

const routes: Routes = [
    //rutas secundarias
    {path: 'miperfil', component: MiperfilComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
