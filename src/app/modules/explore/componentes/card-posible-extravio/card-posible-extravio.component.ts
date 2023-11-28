import { Component } from '@angular/core';
import { Mascotasencontrada } from 'src/app/models/mascotasencontrada';
//crud service
import { ServicesService } from 'src/app/modules/admin/services/services.service';
import 'bootstrap'

@Component({
  selector: 'app-card-posible-extravio',
  templateUrl: './card-posible-extravio.component.html',
  styleUrls: ['./card-posible-extravio.component.css']
})
export class CardPosibleExtravioComponent {
  coleccionMascotas: Mascotasencontrada[] = [];

  publiSeleccionada!: Mascotasencontrada;

  constructor(
    //declaramos el SERVICIO CRUD
    public servicioCRUD: ServicesService
  ){}

  ngOnInit(): void{
    /* del servicio Crud, llamamos a obtener producto y los guardamos
    en la colección */
    this.servicioCRUD.obtenerMascotaEncontrada().subscribe(mascota =>{
      this.coleccionMascotas = mascota;
    })
  }
}
