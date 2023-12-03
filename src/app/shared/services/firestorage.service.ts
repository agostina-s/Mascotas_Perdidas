import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor( public fireStorage: AngularFireStorage) { }
}
