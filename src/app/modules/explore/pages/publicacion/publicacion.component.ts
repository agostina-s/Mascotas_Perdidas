import { Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascotas } from 'src/app/models/mascotasperdidas';
import { Router } from '@angular/router';
//CRUD Service
import { ServicesService } from 'src/app/modules/admin/services/services.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent{
  mascotas: Mascotas[] = []

  publicacion?:Mascotas;

  constructor(private acroutes:ActivatedRoute, public servicioCRUD:ServicesService, private router:Router){

    //lo siguiente se ejecutara al momento de ser cargada la pagina
    //llama a la funcion obtenerMascotasById y envia el id para que le devuelva una publicacion especifica con subscribe()
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

  ngOnInit():void{
    this.servicioCRUD.obtenerMascota().subscribe((mascotas)=>{
      this.mascotas = mascotas
    })
  }

  editarMascota(id:string): void {
    this.router.navigate(['../../editar/editarmascota/',id])
  }


}
