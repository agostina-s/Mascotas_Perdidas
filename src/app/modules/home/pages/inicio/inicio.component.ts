import { Component } from '@angular/core';
import { Mascotas } from 'src/app/models/mascotasperdidas';
import { ServicesService } from 'src/app/modules/admin/services/services.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

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

  getDescripcionCorta(desc: string){
    return desc.split(' ').splice(0,15).join(' ') + '...';
  }


  // CARROUSEL


}
