import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascotas } from 'src/app/models/mascotasperdidas';
import { ServicesService } from '../admin/services/services.service';

@Component({
  selector: 'app-editarmascota',
  templateUrl: './editarmascota.component.html',
  styleUrls: ['./editarmascota.component.css']
})
export class EditarmascotaComponent {
  mascota: Mascotas = {
    idmp :'',
    raza:'',
    tamano:'',
    edad:0,
    nombre:'',
    sexo:'',
    descripcion:'',
    perdida:'',
    imagenprincipal:'',
    imagen2:'',
    imagen3:'',
    imagen4:'',
    ciudad:'',
    barrio:'',
    fechaperdida:'',
    nombredueno:'',
    tel1:0,
    tel2:0,
    mail:'',
  }
  constructor(private route: ActivatedRoute, private mascotaService:ServicesService){}

  ngOnInit():void{
    const mascotaidmp = this.route.snapshot.paramMap.get('idmp')
  }
}
