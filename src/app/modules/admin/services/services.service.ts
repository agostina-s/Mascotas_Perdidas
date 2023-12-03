//archivo CRUD services
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { Mascotas } from 'src/app/models/mascotasperdidas';
import { catchError, first, map } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { Mascotasencontrada } from 'src/app/models/mascotasencontrada';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicesService{
  private mascotasColeccion: AngularFirestoreCollection<Mascotas>

  private mascotasSubject = new BehaviorSubject<Mascotas[]>([]);
  mascotas$ = this.mascotasSubject.asObservable();
  private mascotasEncontradasColeccion: AngularFirestoreCollection<Mascotasencontrada>;
  private usuariosColeccion: AngularFirestoreCollection<Usuario>

  // Constructor del servicio, establece la conexión con Firestore
  constructor(private database: AngularFirestore) { 
    // Inicializa la colección de mascotas, apuntando a la colección "mascotas" en Firestore
    this.mascotasColeccion = database.collection("mascotas")
    // Inicializa la colección de mascotas, apuntando a la colección "mascotas-encontradas" en Firestore
    this.mascotasEncontradasColeccion = database.collection("mascotas-encontradas")

    this.usuariosColeccion = database.collection("usuarios")
  }

  ngOnInit():void{
    const idMascota= '...'
    this.obtenerMascotaById(idMascota)
  }
    /* ============== CRUD DE MASCOTAS PERDIDAS utiliza coleccion mascotas ============== */

  //funcion crear mascota CREAR
  crearMascota(mascota:Mascotas, userID:string){
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

        //hay que agregar el id a usuarios.publicaciones de userID

        const usuarioRef = this.usuariosColeccion.doc(userID); //obtenemos la referencia del usuario 
        // .get() devuelve un observable por lo que hay usar .pipe(first()).toPromise() para convertirlo en una promesa y esperar que se complete para obtener el valor
        const usuarioDoc = await usuarioRef.get().pipe(first()).toPromise(); 
        const publicacionesActuales = usuarioDoc?.get('publicaciones') || []; //obtenemos el valor del campo publicaciones o si es indefinido un arreglo vacio
        publicacionesActuales.push(id); //agregamos el id de la mascota
        // Utiliza el método update en la referencia del documento
        await usuarioRef.update({ 'publicaciones': publicacionesActuales } as Partial<Usuario>)
        resolve(resultado);
      } catch(error){
        // Si hay un error, rechaza la promesa y pasa el error
        reject(error);
      }
    })
  }

  //funcion obtener mascotas GET // Recupera todos los documentos de la colección "mascotas" y emite cambios en tiempo real

  obtenerMascota(){
    // snapshoot -> captura los cambios
    // pipe -> tubería por dónde viajan esos nuevos datos
    // map -> recorre esos datos, los lee
    return this.mascotasColeccion. snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }


  //funcion modificar mascotas
  modificarMascota(idmp: string, nuevoData:Mascotas){
    //Envíamos el id del producto seleccionado y su nueva información
    return this.database.collection("mascotas").doc(idmp).update(nuevoData)
  }

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

    //funcion para obetener mascota por ID
    publicacion!: Observable<Mascotas>
    obtenerMascotaById(idmp: string){
      // Utiliza AngularFirestore para obtener una publicación por su ID
      console.log('tomando el valor de ', idmp)
      this.publicacion = this.database.collection('mascotas').doc(idmp).valueChanges().pipe(map((data:any) => data as Mascotas));
      return this.publicacion
    }

    
    // obtenerMascotasPorIds(ids: string[]): Observable<Mascotas[]> {
    //   console.log('ejecutando servicio')
    //   const observables = ids.map(id => this.obtenerMascotaById(id));
    //   return forkJoin(observables);
    // }
    




  /* ============== CRUD DE POSIBLES EXTRAVIOS utiliza coleccion mascotas-encontradas ============== */
  //funcion crear encontre mascota CREAR 
  crearMascotaEncontrada(mascota:Mascotasencontrada){
    // Devolver una nueva promesa que se resolverá o rechazará más adelante
    return new Promise(async(resolve,reject)=>{
      try{
        // Generar un ID único para la nueva mascota utilizando createId
        const id = this.database.createId();
         // Asignar el ID único a la mascota
        mascota.idme = id;
         // Intentar realizar la operación de escritura en la colección de mascotas
        const resultado = await this.mascotasEncontradasColeccion.doc(id).set(mascota)
         // Si el resultado se completa con éxito, resuelve la promesa
        resolve(resultado);
      } catch(error){
        // Si hay un error, rechaza la promesa y pasa el error
        reject(error);
      }
    })
  }
  
    //funcion obtener mascotas GET // Recupera todos los documentos de la colección "mascotas" y emite cambios en tiempo real
    obtenerMascotaEncontrada(){
      // snapshoot -> captura los cambios
      // pipe -> tubería por dónde viajan esos nuevos datos
      // map -> recorre esos datos, los lee
      return this.mascotasEncontradasColeccion. snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
    }

    
    //funcion para obetener mascota por ID
    publicacionEncontrada!: Observable<Mascotasencontrada>
    obtenerMascotaEncontradaById(idme: string){
      // Utiliza AngularFirestore para obtener una publicación por su ID
      this.publicacionEncontrada = this.database.collection('mascotas-encontradas').doc(idme).valueChanges().pipe(map((data:any) => data as Mascotasencontrada));
      return this.publicacionEncontrada
    }

}
