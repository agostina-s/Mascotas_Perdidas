import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Mascotas } from 'src/app/models/mascotasperdidas';
import { ServicesService } from '../admin/services/services.service';

@Component({
  selector: 'app-editarmascota',
  templateUrl: './editarmascota.component.html',
  styleUrls: ['./editarmascota.component.css']
})
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
    this.mascotaService.modificarMascota(this.mascota.idmp, this.mascota).then(
      ()=>{
        alert("cambios guardados exitosamente");
        this.router.navigate(["/publicacion",this.mascota.idmp])
      },
      error =>{
        alert("Error al guardar cambios")
      }
    )
  }
}

