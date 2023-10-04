import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TablaComponent } from './components/tabla/tabla.component';
import { AdminComponent } from './pages/admin/admin.component';


@NgModule({
  declarations: [
    TablaComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
