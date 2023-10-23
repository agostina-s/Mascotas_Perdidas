import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

// vistas de administrador
import { TablaComponent } from './components/tabla/tabla.component';
import { AdminComponent } from './pages/admin/admin.component';

//Angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TablaComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TablaComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
