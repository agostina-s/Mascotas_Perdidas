import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Mascotas } from 'src/app/models/mascotasperdidas';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  coleccionmascotas: Mascotas [] = [];
  productoSeleccionado!: Mascotas; // ! -> toma valores vacios

  mascotas = new FormGroup({
    raza: new FormControl("",Validators.required),
    tamano: new FormControl("",Validators.required),
    edad: new FormControl(0,Validators.required ),
    nombre: new FormControl("",Validators.required),
    sexo:new FormControl("",Validators.required),
    descripcion: new FormControl("",Validators.required),
    perdida: new FormControl("",Validators.required),
    imagenprincipal: new FormControl("",Validators.required),
    imagenn2: new FormControl("",Validators.required),
    imagenn3: new FormControl("",Validators.required),
    imagenn4: new FormControl("",Validators.required),
  })
  
  constructor(
    public servicioCrud: ServicesService
  ){}

  ngOnInit():void{
    this.servicioCrud.obtenerMascota().subscribe(mascotas =>{
      this.coleccionmascotas = mascotas
    })
  }

  async agregarmascotas(){
    if
  }


}
