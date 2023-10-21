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
    // INFORMACION DE LA MASCOTA
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
    // UBICACION
    ciudad: new FormControl("",Validators.required),
    barrio: new FormControl("",Validators.required),
    fechaperdida: new FormControl("",Validators.required),
    // CONTACTO
    nombredueno: new FormControl("",Validators.required),
    tel1: new FormControl(0,Validators.required),
    tel2: new FormControl(0,Validators.required),
    mail: new FormControl("",Validators.required),
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
      let nuevamascota: Mascotas = {
        // INFORMACION DE LA MASCOTA
        idmp : '',
        raza:this.mascotas.value.nombre!,
        tamaño: this.mascotas.value.tamano!,
        edad: this.mascotas.value.edad!,
        nombre:this.mascotas.value.nombre!,
        sexo:this.mascotas.value.sexo!,
        descripcion:this.mascotas.value.descripcion!,
        perdida:this.mascotas.value.perdida!,
        imagenprincipal:this.mascotas.value.imagenprincipal!,
        imagenn2:this.mascotas.value.imagenn2!,
        imagen3:this.mascotas.value.imagenn3!,
        imagen4:this.mascotas.value.imagenn4!,
        // UBICACION
        ciudad: this.mascotas.value.ciudad!,
        barrio: this.mascotas.value.barrio!,
        fechaperdida: this.mascotas.value.fechaperdida!,
        // CONTACTO
        nombredueno: this.mascotas.value.nombredueno!,
        tel1: this.mascotas.value.tel1!,
        tel2: this.mascotas.value.tel2!,
        mail: this.mascotas.value.mail!,


      }
      await this.servicioCrud.crearMascota(nuevamascota)
      .then(mascotas=>{
        alert("Se ha añadido su mascota correctamente")
      })
      .catch(error =>{
        alert("Hubo un error al agregar sus mascota :( \n"+error);
      })
    }
  }
  
  


}
