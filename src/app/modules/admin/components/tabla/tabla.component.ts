import { Component } from '@angular/core';
import { Mascotas } from 'src/app/models/mascotasperdidas';
import { ServicesService } from 'src/app/modules/admin/services/services.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
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


}
