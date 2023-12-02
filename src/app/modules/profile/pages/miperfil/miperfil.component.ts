import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascotas } from 'src/app/models/mascotasperdidas';
import { Usuario } from 'src/app/models/usuario';
import { ServicesService } from 'src/app/modules/admin/services/services.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { catchError, forkJoin } from 'rxjs';


@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css']
})
export class MiperfilComponent implements OnInit {

  usuario?:Usuario;
  userID!:string | undefined;

  constructor(
    private servicioAuth: AuthService, 
    private router: Router, 
    private servicioFirestore: FirestoreService,
    private servicioCRUD: ServicesService){
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
  ngOnInit() {
  }

  obtenerMascotasUsuario(){
    this.servicioCRUD.obtenerMascotaById(this.idsPublicaciones[0])
      .subscribe(
        (mascota: Mascotas) => {
          console.log('Mascota obtenida:', mascota);
        },
        error => {
          console.error('Error al obtener mascota:', error);
        }
      );
  }

  publicaciones: Mascotas[] = [];
  idsPublicaciones: string[] = [];
  publicacionesActivas: Mascotas[] = [];
  publicacion: Mascotas | undefined;

  obtenerMascotasFor(){
    for (const id of this.idsPublicaciones){
      (this.servicioCRUD.obtenerMascotaById(id)).subscribe(
        (mascota: Mascotas) => {
          this.publicacion = mascota;
          this.publicacionesActivas.push(this.publicacion)
          console.log('Mascota obtenida:', this.publicacion);
        },
        error => {
          console.error('Error al obtener mascota:', error);
        }
      );
    }
    console.log (this.publicacionesActivas)
  }


  obtenerInfoUser(uid:string){
      this.servicioFirestore.getUserInfo(uid).subscribe( res =>{
        this.usuario = res;
        
        if(this.usuario?.publicaciones){
          this.idsPublicaciones = this.usuario?.publicaciones;
        }
        return this.usuario
      })
  }
}
