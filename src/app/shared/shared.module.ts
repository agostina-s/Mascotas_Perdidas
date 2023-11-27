import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from '../shared/components/footer/footer.component'
import { NavbarComponent } from '../shared/components/navbar/navbar.component'




@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    //Exportamos el footer y el navbar para poder usarlo en donde queramos de la pagina
    FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule implements OnInit{ 
  constructor(){ }
  ngOnInit(): void {
    
  }
}
