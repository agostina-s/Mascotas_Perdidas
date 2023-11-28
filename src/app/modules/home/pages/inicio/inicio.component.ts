import { Component } from '@angular/core';
import { Mascotas } from 'src/app/models/mascotasperdidas';
import { Mascotasencontrada } from 'src/app/models/mascotasencontrada';
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

  // Arreglo para almacenar las mascotas encontradas obtenidas del servicio CRUD
  coleccionMascotasEncontradas: Mascotasencontrada [] = [];
  // Mascota seleccionada actualmente
  publiSeleccionadaEncontrada!: Mascotasencontrada;


// Constructor para inyectar el servicio CRUD
  constructor(
    //declaramos el SERVICIO CRUD
    public servicioCRUD: ServicesService

  ){}

  ngOnInit(): void{

    /* del servicio Crud, llamamos a obtener publicaciones y los guardamos
    en la colección */
    this.servicioCRUD.obtenerMascota().subscribe(mascota =>{
      this.coleccionMascotas = mascota;
    })

    /* del servicio Crud, llamamos a obtener publicaciones y los guardamos
    en la colección */
    this.servicioCRUD.obtenerMascotaEncontrada().subscribe(mascota =>{
      this.coleccionMascotasEncontradas = mascota;
    })
  }

  // Método para obtener una descripción corta (primeros 10 palabras) de una cadena
  getDescripcionCorta(desc: string){
    return desc.split(' ').splice(0,10).join(' ') + '...';
  }
  
 // Elementos del DOM
  cardsLista!: HTMLDivElement;

   // Elementos del DOM2
    cardsLista2!: HTMLDivElement;

  ngAfterViewInit() {
    // Aquí, la vista y sus elementos están completamente inicializados.
    this.cardsLista = document.querySelector('.slider1') as HTMLDivElement;
    this.cardsLista2 = document.querySelector('.slider2') as HTMLDivElement;
  }

  // Método para desplazar a la derecha en el carrusel
  desplazarDerecha1(){
    this.cardsLista.scrollLeft += 319;
  }
   // Método para desplazar a la izquierda en el carrusel
  desplazarIzquierda1(){
    this.cardsLista.scrollLeft -= 319;
  }

    // Método para desplazar a la derecha en el carrusel
    desplazarDerecha2(){
      this.cardsLista2.scrollLeft += 319;
    }
     // Método para desplazar a la izquierda en el carrusel
    desplazarIzquierda2(){
      this.cardsLista2.scrollLeft -= 319;
    }

  // CARROUSEL
  // tabs = document.querySelectorAll('.slider-wrapper card');
  

}
