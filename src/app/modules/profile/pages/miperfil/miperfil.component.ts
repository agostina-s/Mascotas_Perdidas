import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, combineLatest, of } from 'rxjs';
import { Mascotas } from 'src/app/models/mascotasperdidas';
import { Usuario } from 'src/app/models/usuario';
import { ServicesService } from 'src/app/modules/admin/services/services.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
// import { catchError, forkJoin } from 'rxjs';


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
    private servicioCRUD: ServicesService,
    private cdr: ChangeDetectorRef){
    //LA GLORIA pide el estado de autentificacion en tiempo real y devuelve el userID
    this.servicioAuth.authState().subscribe( res => {
      if(res?.uid !== undefined){
        this.userID = res?.uid
        // console.log('la respuesta del observable +:',this.userID)
        this.obtenerInfoUser(this.userID as string)
        return this.userID
      }else{
        this.userID = undefined
        // console.log('la respuesta del observable -:',this.userID)
        this.router.navigate(['../../auth/login'])
        return this.userID
      }
    })
  }
  ngOnInit() {
  }

  
  publicaciones: Mascotas[] = [];
  idsPublicaciones: string[] = [];

  obtenerMascotasUsuario(){
    // Obtener las mascotas asociadas a las publicaciones del usuario
    const observablesMascotas = this.usuario?.publicaciones.map((id) =>
      this.servicioCRUD.obtenerMascotaById(id).pipe(
        catchError((error) => {
          console.error('Error al obtener mascota por ID:', error);
          return of(null); // Retornar un observable de valor nulo
        })
      )
    ) || [];

    combineLatest(observablesMascotas).subscribe(
      (mascotas: (Mascotas | null)[]) => {
        // Filtrar las mascotas que no se pudieron obtener (valor nulo)
        this.publicaciones = mascotas.filter((mascota) => mascota !== null) as Mascotas[];
        console.log('Mascotas actualizadas:', this.publicaciones);
      },
      (error) => {
        console.error('Error al obtener mascotas:', error);
      }
    );
  }


  // publicacionesActivas: Mascotas[] = [];
  // publicacion: Mascotas | undefined;

  // obtenerMascotasFor(){
  //   for (const id of this.idsPublicaciones){
  //     (this.servicioCRUD.obtenerMascotaById(id)).subscribe(
  //       (mascota: Mascotas) => {
  //         this.publicacion = mascota as Mascotas;
  //         this.publicacionesActivas.push(this.publicacion)
  //         console.log('Mascota obtenida:', this.publicacion);
  //         this.cdr.detectChanges();
  //       },
  //       error => {
  //         console.error('Error al obtener mascota:', error);
  //       }
  //     );
  //   }
  //   console.log('Publicaciones Activas:', this.publicacionesActivas);
  // }


  obtenerInfoUser(uid:string){
      this.servicioFirestore.getUserInfo(uid).subscribe( res =>{
        this.usuario = res;
        
        if(this.usuario?.publicaciones){
          this.idsPublicaciones = this.usuario?.publicaciones;
        }
        return this.usuario
      })
  }

  cerrarSesion(){
    this.servicioAuth.cerrarSesion();
    alert('la sesión se cerró exitosamente')
  }

}
