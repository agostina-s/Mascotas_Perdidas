import { Component } from '@angular/core';
//importaciones
import { AuthService } from '../../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true; // esto es del input

  usuarios: Usuario = {
    uid: '',
    name: '',
    email: '',
    password: ''
  }

  uid = '';

  // creamos una nueva colección para usuarios
  coleccionUsuarios: Usuario[] = [];
}
