//archivo CRUD services
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Mascotas } from 'src/app/models/mascotasperdidas';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private mascotasColeccion: AngularFirestoreCollection<Mascotas>
// Constructor del servicio, establece la conexión con Firestore
  constructor(private database: AngularFirestore) { 
    // Inicializa la colección de mascotas, apuntando a la colección "mascotas" en Firestore
    this.mascotasColeccion = database.collection("mascotas")
  }

  //
  //
  //
  //funcion crear mascota CREAR
  crearMascota(mascota:Mascotas){
    // Devolver una nueva promesa que se resolverá o rechazará más adelante
    return new Promise(async(resolve,reject)=>{
      try{
        // Generar un ID único para la nueva mascota utilizando createId
        const id = this.database.createId();
         // Asignar el ID único a la mascota
        mascota.idmp = id;
         // Intentar realizar la operación de escritura en la colección de mascotas
        const resultado = await this.mascotasColeccion.doc(id).set(mascota)
         // Si el resultado se completa con éxito, resuelve la promesa
        resolve(resultado);
      } catch(error){
        // Si hay un error, rechaza la promesa y pasa el error
        reject(error);
      }
    })
  }

  //
  //
  //
  //funcion obtener mascotas GET // Recupera todos los documentos de la colección "mascotas" y emite cambios en tiempo real
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
  // Eliminar una mascota de la colección "mascotas" en Firestore
  eliminarMascotas(idmp:string){
    // Devolver una nueva promesa que se resolverá o rechazará más adelante
    return new Promise ((resolve,reject) =>{
      try{
          // Intentar eliminar el documento con el ID proporcionado
        const respuesta = this.mascotasColeccion.doc(idmp).delete()
         // Si la operación se completa con éxito, resuelve la promesa
        resolve(respuesta)
      }
      catch(error){
        // Si hay un error durante la operación, rechaza la promesa y pasa el error
        reject(error)
      }
    })
  }

  //
  //
  //
  //funcion para obetener mascota por ID
  publicacion!: Observable<Mascotas>
  obtenerMascotaById(idmp: string){
    // Utiliza AngularFirestore para obtener una publicación por su ID
    this.publicacion = this.database.collection('mascotas').doc(idmp).valueChanges().pipe(map((data:any) => data as Mascotas));
    return this.publicacion
  }





  /*
  async obtenerMascotaById(id:string):Promise<Publicacion | undefined{
    const publicaciones = await this.obtenerMascota();
    const publiElegida = publicaciones.find( mascota => publicacion.id === id )

  }*/



  // obtenerMascotaById(idmp:string){
  //   return new Promise ((resolve, reject) => {
  //     try{
  //       const res= this.mascotasColeccion.doc(idmp).get()
  //       resolve(res)
  //     } catch(error){
  //       reject (error)}
  //   }) 

  // }

}
