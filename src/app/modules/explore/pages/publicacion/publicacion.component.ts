import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascotas } from 'src/app/models/mascotasperdidas';
//CRUD Service
import { ServicesService } from 'src/app/modules/admin/services/services.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent{

  //publicacionID:string;

  constructor(private acroutes:ActivatedRoute){
    this.acroutes.params.subscribe(params => {
      console.log(params)
      //this.publicacionID= params['id'];
    })
  }

}
