import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from '../shared/components/footer/footer.component'
import { NavbarComponent } from '../shared/components/navbar/navbar.component'



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
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
