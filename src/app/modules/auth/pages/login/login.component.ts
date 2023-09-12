import { Component } from '@angular/core';
//importaciones
import { AuthService } from '../../services/auth.service';//iniciar sesion
import { Usuario } from 'src/app/models/usuario';// trae la interfaz
import { FirestoreService } from 'src/app/shared/services/firestore.service'; //trae los datos de firestore
import { Router } from '@angular/router'; //navegacion

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;

  usuarios: Usuario = {
    uid: '',
    name: '',
    email: '',
    password: ''
  }

  constructor(
    public servicioAuth: AuthService,
    public firestore: FirestoreService,
    public router: Router
  ){}

  async ingresar(){
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }

    const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.password)
    .then(res => {
      alert("Ha iniciado sesión exitosamente");

      this.router.navigate(['/inicio']);
    })
    .catch(error => {
      alert("Hubo un error al iniciar sesión :( \n +" + error);
    })
  }
}