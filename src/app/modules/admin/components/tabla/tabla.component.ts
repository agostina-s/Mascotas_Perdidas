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


mostrarBorrar(publiSeleccionada: Mascotas){ // boton para el model
  this.publiSeleccionada = publiSeleccionada;
}

eliminarMascotas(){
  this.servicioCRUD.eliminarMascotas(this.publiSeleccionada.idmp)
  .then(respuesta =>{
    alert("El producto se elimino correctamente.");
  })
  .catch(error =>{
    alert("No se ha podido eliminar el producto: \n"+error)
  })
}
}

