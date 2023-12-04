import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor( public fireStorage: AngularFireStorage) { }

  subirImagen(file:any, path: string, nombre: string): Promise<string>{
    return new Promise( resolve =>{

      const filePath = path + '/' + nombre;
      const ref = this.fireStorage.ref(filePath);
      const task = ref.put(file);
      task.snapshotChanges().pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe(res => {
            const descargaURL = res
            resolve(descargaURL);
            return
          })
        })
      ).subscribe();
      resolve('a')
    })
  }

}
