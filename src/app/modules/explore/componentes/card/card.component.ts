import { Component } from '@angular/core';
import { Mascotas } from 'src/app/models/mascotasperdidas';
//crud service
import { ServicesService } from 'src/app/modules/admin/services/services.service';
 import 'bootstrap'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  coleccionMascotas: Mascotas[] = [];

  publiSeleccionada!: Mascotas;

  constructor(
    //declaramos el SERVICIO CRUD
    public servicioCRUD: ServicesService
  ){}

  ngOnInit(): void{
    /* del servicio Crud, llamamos a obtener producto y los guardamos
    en la colección */
    this.servicioCRUD.obtenerMascota().subscribe(mascota =>{
      this.coleccionMascotas = mascota;
    })
  }
  // masInfo(info: Mascotas){
  //       // info resguarda la información del producto seleccionado
  //       this.publiSeleccionada = info;
      
  // }
  
}
