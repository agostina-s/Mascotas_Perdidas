import { Injectable } from '@angular/core';

//servicio de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //referenciamos auth de firebase
  constructor(public auth: AngularFireAuth) { }


  //funcion para REGISTRARSE
  registrar(email:string, password: string){
    //retorna el nuevo valor de mail y contraseña
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  //funcion para LOGEARSE
  iniciarSesion(email: string, contrasena: string){
    // valida email y contraseña de la BD
    return this.auth.signInWithEmailAndPassword(email, contrasena)
  }


  //funcion para TOMAR UID
  async getuid(){
    //genera una promesa y user la captura 
    const user = await this.auth.currentUser;

    if(user == null){
      return null;
    }else{
      return user.uid;
    }
  }
}
