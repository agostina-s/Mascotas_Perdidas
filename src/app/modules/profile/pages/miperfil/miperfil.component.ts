import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css']
})
export class MiperfilComponent {

  usuario?:Usuario;
  userID!:string | undefined;

  constructor(private servicioAuth: AuthService, private router: Router, private servicioFirestore: FirestoreService){
    //LA GLORIA pide el estado de autentificacion en tiempo real y devuelve el userID
    this.servicioAuth.authState().subscribe( res => {
      if(res?.uid !== undefined){
        this.userID = res?.uid
        console.log('la respuesta del observable +:',this.userID)
        this.obtenerInfoUser(this.userID as string)
        return this.userID
      }else{
        this.userID = undefined
        console.log('la respuesta del observable -:',this.userID)
        this.router.navigate(['../../auth/login'])
        return this.userID
      }
    })

    
  }


  //ahora hay que pedir los datos del usuario

  //el usuario va a ser dueño de ciertas publicaciones
  //las publicaciones van a tener un solo dueño

  //a la hora de publicar una, se cargará en la BD el userID del que la publicó. Si al comparar el uid actual con el uid de la publicacion se podrá editar. caso contrario no.
  
  //como se va a asociar cada publicacion a las del usuario? va a contener un arreglo que se llamara publicaciones

  obtenerInfoUser(uid:string){
    this.servicioFirestore.getUserInfo(uid).subscribe(res =>{
        this.usuario = res
    })
  }

}
