import { Component, inject} from '@angular/core';
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

  publicacion?:Mascotas;

  constructor(private acroutes:ActivatedRoute, public servicioCRUD:ServicesService){
    this.acroutes.params.subscribe(param => {
      console.log(param)
      const idPublicacion = param['id']
      if(param['id']){
        this.servicioCRUD.obtenerMascotaById(idPublicacion).subscribe(data => {
          this.publicacion = data;
        })
        
      }
      //this.publicacionID= params['id'];
    })
  }

}
