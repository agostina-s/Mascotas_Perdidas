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
    FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule implements OnInit{ 
  constructor(){ }
  ngOnInit(): void {
    
  }
}
