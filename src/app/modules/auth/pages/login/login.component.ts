import { Component } from '@angular/core';
//importaciones
import { AuthService } from '../../services/auth.service';//iniciar sesion
import { Usuario } from 'src/app/models/usuario';// trae la interfaz
import { FirestoreService } from 'src/app/shared/services/firestore.service'; // Servicio para interactuar con Firestore
import { Router } from '@angular/router'; // Servicio de enrutamiento para navegar

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;

  userID!:string | undefined;

  // Modelo de usuario para el formulario
  usuarios: Usuario = {
    uid: "",
    email: "",
    password: "",
    name: "",
    foto: "",
    descripcion: "",
    ubicacion: ""
  }

  constructor(
    public servicioAuth: AuthService,  // Servicio de autenticación
    public firestore: FirestoreService, // Servicio para interactuar con Firestore
    public router: Router // Servicio de enrutamiento para navegar
  ){
        //LA GLORIA pide el estado de autentificacion en tiempo real y devuelve el userID
        this.servicioAuth.authState().subscribe( res => { //se suscribe al metodo del servicio auth
          if(res?.uid !== undefined){
            this.userID = res?.uid //recupera el id y se lo asigna a una variable
            console.log('la respuesta del observable:',this.userID)
            return this.userID
          }else{
            this.userID = undefined
            console.log('la respuesta del observable:',this.userID)
            return this.userID
          }
        })
  }

// Método para iniciar sesión
  async ingresar(){
     // Crear objeto de credenciales para iniciar sesión
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }


    // Llamar al servicio de autenticación para iniciar sesión
    const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.password)
    .then(res => {
      // Alerta de inicio de sesión exitoso
      alert("Ha iniciado sesión exitosamente");
      // Redirigir a la página de inicio después de iniciar sesión
      this.router.navigate(['../../home/inicio']);
    })
    .catch(error => {
         // Alerta en caso de error al iniciar sesión
      alert("Hubo un error al iniciar sesión :( \n +" + error);
    })
  }
}