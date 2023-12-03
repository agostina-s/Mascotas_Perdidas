import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Mascotasencontrada } from 'src/app/models/mascotasencontrada';
import { ServicesService } from '../../../admin/services/services.service';
import { trigger, transition, animate, style } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
      // transition(':leave', [
      //   animate('0.5s', style({ opacity: 0 })),
      // ]),
    ]),
  ],
})
export class FormularioComponent {
  // Arreglo para almacenar las mascotas existentes
  coleccionmascotas: Mascotasencontrada [] = [];
  productoSeleccionado!: Mascotasencontrada; // ! -> toma valores vacios


  //ENLAZAMIENTO AL FORMULARIO
  mascotas = new FormGroup({
    // INFORMACION DE LA MASCOTA
    raza: new FormControl("",Validators.required),
    tamano: new FormControl("",Validators.required),
    collar: new FormControl(null, Validators.required), //true o false
    nombre: new FormControl("",), //opcional
    sexo:new FormControl("",Validators.required),
    descripcion: new FormControl("",Validators.required),
    imagenprincipal: new FormControl("",Validators.required),
    img2: new FormControl(""),//opcional
    img3: new FormControl(""),//opcional
    img4: new FormControl(""),//opcional
    // UBICACION
    encuentro: new FormControl("", Validators.required),
    ciudad: new FormControl("",Validators.required),
    barrio: new FormControl("",Validators.required),
    fechaencuentro: new FormControl("",Validators.required),
    // CONTACTO
    nombrepublicador: new FormControl("",Validators.required),
    tel1: new FormControl(null,Validators.required),
    tel2: new FormControl(null), //opcional
    mail: new FormControl("",[Validators.required, Validators.email]), 
  })
  
  // Constructor para inyectar el servicio CRUD
  //LLAMAR AL SERVICIO CRUD
  constructor(
    public servicioCrud: ServicesService, 
    private router: Router
  ){}

  //Probar form
  // impimirForm(){
  //   console.log(this.mascotas)
  // }

  // //NO NECESITAMOS PEDIR LAS PUBLICACIONES
  // ngOnInit():void{
  //   this.servicioCrud.obtenerMascota().subscribe(mascotas =>{
  //     this.coleccionmascotas = mascotas
  //   })
  // }

  //FUNCION QUE ENVIA EL FORM AL SERVICE
  async agregarMascotaEncontrada(){
    if(this.mascotas.valid){
      let nuevamascota: Mascotasencontrada = { //ASIGNAR LOS VALORES DE LOS INPUTS A NUEVA MASCOTA
        // INFORMACION DE LA MASCOTA
        idme : '', //se guarda vacio para agregarlo en el crud
        raza:this.mascotas.value.raza!,
        tamano: this.mascotas.value.tamano!,
        collar: this.mascotas.value.collar!,
        nombre:this.mascotas.value.nombre!,
        sexo:this.mascotas.value.sexo!,
        descripcion:this.mascotas.value.descripcion!,
        imagenprincipal:this.mascotas.value.imagenprincipal!,
        img2:this.mascotas.value.img2!,
        img3:this.mascotas.value.img3!,
        img4:this.mascotas.value.img4!,
        // UBICACION
        encuentro: this.mascotas.value.encuentro!,
        ciudad: this.mascotas.value.ciudad!,
        barrio: this.mascotas.value.barrio!,
        fechaencuentro: this.mascotas.value.fechaencuentro!,
        // CONTACTO
        nombrepublicador: this.mascotas.value.nombrepublicador!,
        tel1: this.mascotas.value.tel1!,
        tel2: this.mascotas.value.tel2!,
        mail: this.mascotas.value.mail!,
      }
      await this.servicioCrud.crearMascotaEncontrada(nuevamascota)
      .then(mascotas=>{
        alert("Se ha añadido la mascota posiblemente extraviada correctamente")
        this.router.navigate(['../../explore/busqueda'])
      })
      .catch(error =>{
        alert("Hubo un error al agregar sus mascota :( \n"+error);
      })
    }
  }

  /* ============= MODIFICACION DE ESTILOS ============== */

  //Valores predefinidos
  mostrarDivDescripcion = true;
  mostrarDivUbicacion = false;
  mostrarDivContacto = false;

  btnSiguienteForm(){
      //si estoy parado en descripcion y presiono siguiente --> voy a ubicacion
    if(this.mostrarDivDescripcion == true){
      this.mostrarDivUbicacion = true;
      this.mostrarDivDescripcion = false;
    }else{
      //si estoy parado en ubicacion y presiono siguiente --> voy a contacto
      if(this.mostrarDivUbicacion == true){
        this.mostrarDivContacto = true;
        this.mostrarDivUbicacion = false;
      }
    }
  }

  btnAtrasForm(){
    // si estoy parado en ubicacion y quiero volver atras --> voy hacia descripcion
    if(this.mostrarDivUbicacion == true){
      this.mostrarDivUbicacion = false;
      this.mostrarDivDescripcion = true;
    }else{
      //si estoy parado en contacto y quiero volver atras --> voy hacia ubicacion
      if(this.mostrarDivContacto == true){
        this.mostrarDivContacto = false;
        this.mostrarDivUbicacion = true;
      }
    }
  }

  // Funciones para cambiar entre secciones del formulario
  btnDescripcion(){
    this.mostrarDivDescripcion = true;
    this.mostrarDivUbicacion = false;
    this.mostrarDivContacto = false;
  }
  btnUbicacion(){
    this.mostrarDivDescripcion = false;
    this.mostrarDivUbicacion = true;
    this.mostrarDivContacto = false;
  }
  btnContacto(){
    this.mostrarDivDescripcion = false;
    this.mostrarDivUbicacion = false;
    this.mostrarDivContacto = true;
  }
}
