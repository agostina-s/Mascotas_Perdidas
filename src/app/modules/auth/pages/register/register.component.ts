import { Component } from '@angular/core';
//importaciones
import { AuthService } from '../../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true; //del input

  usuarios: Usuario = {
    uid: '',
    name: '',
    email: '',
    password: ''
  }

  uid = '';

  // crear una nueva colección para usuarios
  coleccionUsuarios: Usuario[] = [];

    // servicioAuth referencia a nuestro servicio Auth
  constructor(
    public servicioAuth: AuthService, 
    public servicioFirestore: FirestoreService,
    public router: Router
  ) { }

  // tomamos nuevos registros y mostramos los resultados
  async registrarse() {
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
  };
  const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
  // el método THEN nos devuelve el mismo valor que guarda la promesa
    .then(res =>{
      alert("Se ha registrado exitosamente");
      this.router.navigate(['/inicio']); //redirige a inicio
    })
    // el método CATCH mostrará el error en caso de un error xd
    .catch(error => 
      alert("Hubo un error al cargar el nuevo usuario :( \n"+error)
    );

    //constante para UID
    const uid = await this.servicioAuth.getUID();
    this.usuarios.uid = uid;

    // GUARDA EL NUEVO USUARIO
    this.guardarUser();
}

  // función que agrega NUEVO USUARIO
  async guardarUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res => {
      console.log(this.usuarios)
    })
    .catch(error =>{
      console.log('Error =>', error)
    })
  }

  async ngOnInit(){
    const uid = await this.servicioAuth.getUID();
    console.log(uid);
  }
}