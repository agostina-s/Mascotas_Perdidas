import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascotas } from 'src/app/models/mascotasperdidas';
//CRUD Service
import { ServicesService } from 'src/app/modules/admin/services/services.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent {

  constructor(private acroutes:ActivatedRoute){}

}
