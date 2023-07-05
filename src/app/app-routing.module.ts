import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //lazyloading
  {path: 'home', loadChildren:()=>import('./modules/home/home.module').then( m => m.HomeModule)},
  {path: 'explore', loadChildren:()=>import('./modules/explore/explore.module').then( m => m.ExploreModule)},
  {path: 'auth', loadChildren:()=>import('./modules/auth/auth.module').then( m => m.AuthModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
