import { Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //importo ac routes
import { Mascotas } from 'src/app/models/mascotasperdidas';
import { Router } from '@angular/router';
//CRUD Service
import { ServicesService } from 'src/app/modules/admin/services/services.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent{
  mascotas: Mascotas[] = []
  publiSeleccionada!: Mascotas;
  publicacion?:Mascotas;

  userID!:string | undefined;

  coleccionMascotas: Mascotas[] = [];


  constructor(private acroutes:ActivatedRoute,
              public servicioCRUD:ServicesService, 
              private router:Router,
              private servicioAuth: AuthService){ //acroutes detecta id que esta en el url

            //LA GLORIA pide el estado de autentificacion en tiempo real y devuelve el userID
            this.servicioAuth.authState().subscribe( res => {
              if(res?.uid !== undefined){
                this.userID = res?.uid
                console.log('la respuesta del observable:',this.userID)
                return this.userID
              }else{
                this.userID = undefined
                console.log('la respuesta del observable:',this.userID)
                return this.userID
              }
            })

    //lo siguiente se ejecutara al momento de ser cargada la pagina
    //llama a la funcion obtenerMascotasById y envia el id para que le devuelva una publicacion especifica con subscribe()
    this.acroutes.params.subscribe(param => { 
      console.log(param)
      const idPublicacion = param['id'] //id url
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

 mostrarBorrar(publiSeleccionada: Mascotas){ // boton para el model
  this.publiSeleccionada = publiSeleccionada;
}

// Método para eliminar la mascota seleccionada
eliminarMascotas(){
  this.servicioCRUD.eliminarMascotas(this.publiSeleccionada.idmp)
  .then(respuesta =>{
    alert("La publicacion se elimino correctamente.");
    this.router.navigate(['../explore/busqueda'])
  })
  .catch(error =>{
    alert("No se ha podido eliminar la publicacion \n"+error)
  })
}


}

