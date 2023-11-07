import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //lazyloading
  {path: '', redirectTo: "/home/inicio", pathMatch:"full"},
  {path: 'home', loadChildren:()=>import('./modules/home/home.module').then( m => m.HomeModule)},
  {path: 'explore', loadChildren:()=>import('./modules/explore/explore.module').then( m => m.ExploreModule)},
  {path: 'auth', loadChildren:()=>import('./modules/auth/auth.module').then( m => m.AuthModule)},
  {path: 'form-publicar',loadChildren:()=>import('./modules/form-publicar/formpublicar.module').then( m=>m.FormpublicarModule)},
  {path: 'form-encontre',loadChildren:()=>import('./modules/form-encontre/form-encontre.module').then( m=>m.FormEncontreModule)},
  {path: 'profile', loadChildren:()=>import('./modules/profile/profile.module').then( m => m.ProfileModule)}
  {}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
