import { Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascotasencontrada } from 'src/app/models/mascotasencontrada';
//CRUD Service
import { ServicesService } from 'src/app/modules/admin/services/services.service';


@Component({
  selector: 'app-publicacion-posible-extravio',
  templateUrl: './publicacion-posible-extravio.component.html',
  styleUrls: ['./publicacion-posible-extravio.component.css']
})
export class PublicacionPosibleExtravioComponent {
  publicacion?:Mascotasencontrada;

  constructor(private acroutes:ActivatedRoute, public servicioCRUD:ServicesService){

    //lo siguiente se ejecutara al momento de ser cargada la pagina
    //llama a la funcion obtenerMascotasById y envia el id para que le devuelva una publicacion especifica con subscribe()
    this.acroutes.params.subscribe(param => {
      console.log(param)
      const idPublicacion = param['id']
      if(param['id']){
        this.servicioCRUD.obtenerMascotaEncontradaById(idPublicacion).subscribe(data => {
          this.publicacion = data;
        })
        
      }
      //this.publicacionID= params['id'];
    })
  }

}
