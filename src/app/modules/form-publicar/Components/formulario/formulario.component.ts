import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Mascotas } from 'src/app/models/mascotasperdidas';
import { ServicesService } from '../../../admin/services/services.service';
import { trigger, transition, animate, style } from '@angular/animations';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

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
  coleccionmascotas: Mascotas [] = [];
  productoSeleccionado!: Mascotas; // ! -> toma valores vacios
  userID!:string | undefined;


  //ENLAZAMIENTO AL FORMULARIO

  //grupo de formcontrol
  mascotas = new FormGroup({
    // INFORMACION DE LA MASCOTA
    raza: new FormControl("",Validators.required),
    tamano: new FormControl("",Validators.required),
    edad: new FormControl(null,Validators.required ),
    nombre: new FormControl("",Validators.required),
    sexo:new FormControl("",Validators.required),
    descripcion: new FormControl("",Validators.required),
    perdida: new FormControl("",Validators.required),
    imagenprincipal: new FormControl("",Validators.required),
    imagen2: new FormControl("",),
    imagen3: new FormControl("",),
    imagen4: new FormControl("",),
    // UBICACION
    ciudad: new FormControl("",Validators.required),
    barrio: new FormControl("",Validators.required),
    fechaperdida: new FormControl("",Validators.required),
    // CONTACTO
    nombredueno: new FormControl("",Validators.required),
    tel1: new FormControl(null,Validators.required),
    tel2: new FormControl(null,),
    mail: new FormControl("",[Validators.required, Validators.email]),
  })
  
  //LLAMAR AL SERVICIO CRUD
  constructor(
    public servicioAuth: AuthService,  // Servicio de autenticación
    public servicioCrud: ServicesService,
    private servicioUser: FirestoreService
  ){
        //pide el estado de autentificacion en tiempo real y devuelve el userID
        this.servicioAuth.authState().subscribe( res => {
          if(res?.uid !== undefined){
            this.userID = res?.uid
            console.log('la respuesta del observable:',this.userID)
            return this.userID
          }else{
            this.userID = undefined
            console.log('la respuesta del observable:',this.userID)
            return this.userID
          }
        })

  }

  // //NO NECESITAMOS PEDIR LAS PUBLICACIONES
  // ngOnInit():void{
  //   this.servicioCrud.obtenerMascota().subscribe(mascotas =>{
  //     this.coleccionmascotas = mascotas
  //   })
  // }

  //FUNCION QUE ENVIA EL FORM
  async agregarMascota(){
    if(this.mascotas.value){
      let nuevamascota: Mascotas = {
        // INFORMACION DE LA MASCOTA
        idmp : '', //se guarda vacio para agregarlo en el crud
        raza:this.mascotas.value.raza!,
        tamano: this.mascotas.value.tamano!,
        edad: this.mascotas.value.edad!,
        nombre:this.mascotas.value.nombre!,
        sexo:this.mascotas.value.sexo!,
        descripcion:this.mascotas.value.descripcion!,
        perdida:this.mascotas.value.perdida!,
        imagenprincipal:this.mascotas.value.imagenprincipal!,
        imagen2:this.mascotas.value.imagen2!,
        imagen3:this.mascotas.value.imagen3!,
        imagen4:this.mascotas.value.imagen4!,
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
      await this.servicioCrud.crearMascota(nuevamascota,this.userID as string)
      .then(mascotas=>{
        alert("Se ha añadido su mascota correctamente")
      })
      .catch(error =>{
        alert("Hubo un error al agregar sus mascota :( \n"+error);
      })
    }
  }

  // MODIFICACION DE ESTILOS

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
