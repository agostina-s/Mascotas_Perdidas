import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //lazyloading
  //aca se encuentran las cargas perezosas, esto sirve para poder ver la pagina en el navegador, si queremos entrar al formulario pondremos lo que dice en path
  {path: '', redirectTo: "/home/inicio", pathMatch:"full"},
  {path: 'home', loadChildren:()=>import('./modules/home/home.module').then( m => m.HomeModule)},
  {path: 'explore', loadChildren:()=>import('./modules/explore/explore.module').then( m => m.ExploreModule)},
  {path: 'auth', loadChildren:()=>import('./modules/auth/auth.module').then( m => m.AuthModule)},
  {path: 'form-publicar',loadChildren:()=>import('./modules/form-publicar/formpublicar.module').then( m=>m.FormpublicarModule)},
  {path: 'form-encontre',loadChildren:()=>import('./modules/form-encontre/form-encontre.module').then( m=>m.FormEncontreModule)},
  {path: 'profile', loadChildren:()=>import('./modules/profile/profile.module').then( m => m.ProfileModule)},
  {path: 'admin',loadChildren:()=>import('./modules/admin/admin.module').then(m => m.AdminModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
