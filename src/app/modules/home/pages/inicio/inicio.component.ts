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
// Arreglo para almacenar las mascotas obtenidas del servicio CRUD
  coleccionMascotas: Mascotas[] = [];
// Mascota seleccionada actualmente
  publiSeleccionada!: Mascotas;
// Constructor para inyectar el servicio CRUD
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

  // Método para obtener una descripción corta (primeros 10 palabras) de una cadena
  getDescripcionCorta(desc: string){
    return desc.split(' ').splice(0,10).join(' ') + '...';
  }
  
 // Elementos del DOM
  flechaAtras: HTMLButtonElement = document.querySelector('#btnAtras') as HTMLButtonElement;
  cards: HTMLDivElement = document.querySelector('.slider-wrapper .card') as HTMLDivElement;
  cardsLista!: HTMLDivElement;

  ngAfterViewInit() {
    // Aquí, la vista y sus elementos están completamente inicializados.
    this.cardsLista = document.querySelector('.slider-wrapper') as HTMLDivElement;
  }

  // Método para desplazar a la derecha en el carrusel
  desplazarDerecha(){
    this.cardsLista.scrollLeft += 319;
  }
   // Método para desplazar a la izquierda en el carrusel
  desplazarIzquierda(){
    this.cardsLista.scrollLeft -= 319;
  }


  // CARROUSEL
  // tabs = document.querySelectorAll('.slider-wrapper card');
  

}
