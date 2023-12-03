import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Mascotas } from 'src/app/models/mascotasperdidas';
import { ServicesService } from 'src/app/modules/admin/services/services.service';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-editarmascota',
  templateUrl: './editarmascota.component.html',
  styleUrls: ['./editarmascota.component.css'],
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

// el componente encargado de editar una publicacion, para corregir errores o modificar datos

export class EditarmascotaComponent {
  
  mascota: Mascotas = {
    idmp: '',
    raza: '',
    tamano: '',
    edad: 0,
    nombre: '',
    sexo: '',
    descripcion: '',
    perdida: '',
    imagenprincipal: '',
    imagen2: '',
    imagen3: '',
    imagen4: '',
    ciudad: '',
    barrio: '',
    fechaperdida: '',
    nombredueno: '',
    tel1: 0,
    tel2: 0,
    mail: '',
  }
  constructor(private route: ActivatedRoute, private mascotaService: ServicesService, private router:Router) { }

  ngOnInit(): void {
    const mascotaidmp = this.route.snapshot.paramMap.get('id')
    if(mascotaidmp){
      this.obtenerMascotaPorUid(mascotaidmp)
    }
  
  }

  obtenerMascotaPorUid(uid: string): void {
    this.mascotaService.obtenerMascotaById(uid).subscribe(mascota => {
      if (mascota) {
        this.mascota = mascota
      } else {
        console.error("no se encontro la mascota por el id", uid)
      }
    })
  }

  guardarCambios():void{
    this.mascotaService.modificarMascota(this.mascota.idmp, this.mascota).then( //al guardar los cambios se llama a la funcion modificar mascota del servicio crud
      ()=>{
        alert("cambios guardados exitosamente");
        this.router.navigate(["../../explore/publicacion/",this.mascota.idmp])
      },
      error =>{
        alert("Error al guardar cambios")
      }
    )
  }



  // estilos para el formulario 
   // MODIFICACION DE ESTILOS

  //Valores predefinidos
  mostrarDivDescripcion:boolean = true;
  mostrarDivUbicacion:boolean = false;
  mostrarDivContacto:boolean = false;

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