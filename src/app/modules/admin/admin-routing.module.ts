import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { TablausuarioComponent } from './components/tablausuario/tablausuario.component';

const routes: Routes = [
  {
    path:"admin",component:AdminComponent
  },
  {
    path:"tabla",component:TablaComponent
  },
  {
    path:"tablausuario",component:TablausuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
