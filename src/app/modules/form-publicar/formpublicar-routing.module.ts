import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginapublicarComponent } from './pages/paginapublicar/paginapublicar.component';

const routes: Routes = [
 
  {path:"paginapublicar",component:PaginapublicarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormpublicarRoutingModule { }
