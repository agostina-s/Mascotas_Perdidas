import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor( public fireStorage: AngularFireStorage) { }

  subirImagen(file:any, path: string): Promise<string>{
    return new Promise( resolve =>{

      const timestamp = new Date().getDate();
      const nombre = `${timestamp}_${file.name}`
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
