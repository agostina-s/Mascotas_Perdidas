import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarmascotaComponent } from './pages/editarmascota/editarmascota.component';

const routes: Routes = [
  {path: 'editarmascota/:id', component: EditarmascotaComponent},                                                                                                 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarRoutingModule {
  
 }
