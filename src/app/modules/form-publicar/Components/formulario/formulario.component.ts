import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Mascotas } from 'src/app/models/mascotasperdidas';
import { ServicesService } from '../../../admin/services/services.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
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

  async agregarmascota(){
    if(this.mascotas.value){
      let nuevoProducto: Producto = {
        idProducto: '',
        raza:this.mascotas.value.nombre!,
        tamaño: this.mascotas.value.tamano!,
        edad: this.mascotas.value.edad!,
        nombre:this.mascotas.value.edad!,
        sexo:this.mascotas.value.edad!,
        descripcion:this.mascotas.value.edad!,
        perdida:this.mascotas.value.edad!,
        imagenprincipal:this.mascotas.value.edad!,
        imagenn2:this.mascotas.value.edad!,
        imagen3:this.mascotas.value.edad!,
        imagen4:this.mascotas.value.edad!,
      }
    }
  }
}
