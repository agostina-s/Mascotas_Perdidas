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
        mascota.idmp = id;

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
  //funcion obtener mascotas GET
  obtenerMascota(){
    // snapshoot -> captura los cambios
    // pipe -> tubería por dónde viajan esos nuevos datos
    // map -> recorre esos datos, los lee
    return this.mascotasColeccion. snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }

  //
  //
  //
  //funcion modificar mascotas
  modificarMascota(idmp: string, nuevoData:Mascotas){
    //Envíamos el id del producto seleccionado y su nueva información
    return this.database.collection("mascotas").doc(idmp).update(nuevoData)
  }

  //
  //
  //
  //funcion eliminar mascotas
  eliminarMascotas(idmp:string){
    return new Promise ((resolve,reject) =>{
      try{
        const respuesta = this.mascotasColeccion.doc(idmp).delete()
        resolve(respuesta)
      }
      catch(error){
        reject(error)
      }
    })
  }

  //
  //
  //
  //funcion para obetener mascota por ID
  obtenerMascotaById(id:string){

  }

}
