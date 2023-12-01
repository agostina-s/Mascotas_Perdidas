import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';

//SERVICIO PARA AGREGAR LA INFORMACION DEL USUARIO A LA BASE DE DATOS (FIRESTORE)

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private usuariosCollection: AngularFirestoreCollection<Usuario>

  // Dentro de los parámetros, inyectamos el servicio AngularFirestore para interactuar con Firestore
  constructor(private database: AngularFirestore) {
    
    // Referenciamos la colección 'usuarios' en la base de datos
    this.usuariosCollection = this.database.collection<Usuario>('usuarios')
  }


  // Método para agregar un usuario a la colección 'usuario' en Firestore
  agregarUsuario(usuario: Usuario, id: string) {
    // RESOLVE: promesa resulta -> similar al then // Utilizamos una promesa para manejar la asincronía de la operación
    // REJECT: promesa rechazada -> similar al catch
    return new Promise(async (resolve, reject) => {
      try {
        // Asignamos el ID proporcionado al usuario
        usuario.uid = id;
        // Utilizamos el método set en el documento con el ID correspondiente en la colección 'usuarios'
        const resultado = await this.usuariosCollection.doc(id).set(usuario)
        // muestra el resultado sin problema
        resolve(resultado)
      }catch(error){
        // en caso de que ocurra un error
        reject(error)
      }
    })
  }


    //funcion para obetener usuario por ID
    usuario!: Observable<Usuario>
    getUserInfo(uid: string){
      // Utiliza AngularFirestore para obtener una publicación por su ID
      this.usuario = this.database.collection('usuarios').doc(uid).valueChanges().pipe(map((data:any) => data as Usuario));
      return this.usuario
    }
}