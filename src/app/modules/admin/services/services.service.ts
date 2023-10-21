//archivo CRUD services



import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Mascotas } from 'src/app/models/mascotasperdidas';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private mascotasColeccion: AngularFirestoreCollection<Mascotas>

  constructor(private database: AngularFirestore) { 
    this.mascotasColeccion = database.collection("mascotas")
  }

  //
  //
  //
  //funcion crear mascota CREAR
  crearMascota(mascota:Mascotas){
    return new Promise(async(resolve,reject)=>{
      try{
        const id = this.database.createId();
        mascota.uid = id;

        const resultado = await this.mascotasColeccion.doc(id).set(mascota)

        resolve(resultado);
      } catch(error){
        reject(error);
      }
    })
  }

  //
  //
  //
  //funcion obtener mascotas
  obtenerMascota(){
    return this.mascotasColeccion. snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }

  //
  //
  //
  //funcion modificar mascotas
  modificarMascota(uid: string, nuevoData:Mascotas){
    return this.database.collection("mascotas").doc(uid).update(nuevoData)
  }

  //
  //
  //
  //funcion eliminar mascotas
  eliminarMascotas(uid:string){
    return new Promise ((resolve,reject) =>{
      try{
        const resp = this.mascotasColeccion.doc(uid).delete()
        resolve(resp)
      }
      catch(error){
        reject(error)
      }
    })
  }

}
