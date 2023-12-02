import { Injectable } from '@angular/core';

//servicio de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //referenciamos auth de firebase
  constructor(public auth: AngularFireAuth) { 
  }

  //funcion para REGISTRARSE
  registrar(email:string, password: string){
    //retorna el nuevo valor de mail y contraseña
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  //funcion para LOGUEARSE
  iniciarSesion(email: string, password: string){
    // valida email y contraseña de la BD
    return this.auth.signInWithEmailAndPassword(email, password) //utiliza el metodo de firebase signInWithEmailAndPassword para iniciar sesion 
  }

  //funcion para CERRAR SESION
  cerrarSesion(){
    return this.auth.signOut(); //utiliza el metodo signOut de firebase para cerrar sesion 
  }

  //funcion para OBTENER UID --- NO ES NECESARIO USAR ESTA FUNCION USAR LA DE ABAJO
  async getUID(){
    //genera una promesa y user la captura 
    const user = await this.auth.currentUser;

    if(user == null){
      console.log('no registrado')
      return null;
    }else{
      const identificador:string = user.uid
      console.log(identificador)
      return user.uid;
    }
  }

  // Verificar el estado de autenticación 
  authState(){
    return this.auth.authState;
  }

}
