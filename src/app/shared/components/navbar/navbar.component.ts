import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{

  userID!:string | undefined;

  constructor(
    public servicioAuth: AuthService, // servicioAuth referencia a nuestro servicio Auth
  ){ 
    //LA GLORIA pide el estado de autentificacion en tiempo real y devuelve el userID
    this.servicioAuth.authState().subscribe( res => {
      if(res?.uid !== undefined){
        this.userID = res?.uid
        return this.userID
      }else{
        this.userID = undefined
        return this.userID
      }
    })
  }
  ngOnInit(): void {
    
  }

  cerrarSesion(){
    this.servicioAuth.cerrarSesion();
    alert('la sesión se cerró exitosamente')
  }
}