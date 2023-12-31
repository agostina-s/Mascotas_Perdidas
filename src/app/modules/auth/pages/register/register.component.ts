import { Component, OnInit } from '@angular/core';
//importaciones
import { AuthService } from '../../services/auth.service'; // Servicio de autenticación
import { Usuario } from 'src/app/models/usuario'; // Interfaz para usuarios
import { FirestoreService } from 'src/app/shared/services/firestore.service'; // Servicio para interactuar con Firestore
import { Router } from '@angular/router'; // Servicio de enrutamiento para navegar



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  hide = true; // Para ocultar la contraseña en el input

  // Modelo de usuario para el formulario
  // Modelo de usuario para el formulario
  usuarios: Usuario = {
    uid: "",
    email: "",
    password: "",
    name: "",
    foto: "",
    descripcion: "",
    ubicacion: "",
    publicaciones: [],
  }


  // crear una nueva colección para usuarios
  coleccionUsuarios: Usuario[] = [];

  userID!:string | undefined;

 // Constructor que inyecta los servicios necesarios
  constructor(
    public servicioAuth: AuthService, // servicioAuth referencia a nuestro servicio Auth
    public servicioFirestore: FirestoreService,  // Servicio para interactuar con Firestore
    public router: Router // Servicio de enrutamiento para navegar
  ) { 
        //el estado del usuario actual 
        this.servicioAuth.authState().subscribe( res => {
          if(res?.uid !== undefined){// si la respuesta del estado del usuario es distinta a indefinida se devuelve al usuario
            this.userID = res?.uid
            // console.log('la respuesta del observable:',this.userID)
            return this.userID
          }else{
            this.userID = undefined
            // console.log('la respuesta del observable:',this.userID)
            return this.userID
          }
        })
  }

  // tomamos nuevos registros y mostramos los resultados
  async registrarse() {
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    };
    //llamamo al servicioAuth y activamos la funcion registrar mandandoles las credenciales
    const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
    // el método THEN nos devuelve el mismo valor que guarda la promesa
      .then(res =>{
        alert("Se ha registrado exitosamente");
        this.router.navigate(['/inicio']); //redirige a inicio
      })
      // el método CATCH mostrará el error en caso de un error xd
      .catch(error => 
        alert("Hubo un error al cargar el nuevo usuario :( \n"+error+'email='+this.usuarios.email)
      );

    //constante para asignar UID
    const uid = await this.servicioAuth.getUID();
    this.usuarios.uid = uid;

    // GUARDA EL NUEVO USUARIO
    this.guardarUser();
    this.router.navigate(['../../home/inicio']); //redirige a inicio
  } 

  // función que agrega NUEVO USUARIO en Firestore SE GUARDA EL USUARIO COMO DATOS (TODA SU INFORMACION)
  async guardarUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res => {
      // visualización de datos 
      // console.log(this.usuarios)
      // console.log(this.usuarios.email)
    })
    .catch(error =>{
      //errores en caso de que falle la operación
      console.log('Error =>', error)
    })
  }

  // Método que se ejecuta al inicializar el componente y obtiene el UID el identificador del usuario
  async ngOnInit(){
    await this.servicioAuth.getUID();
  }
}