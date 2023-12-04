export interface Mascotas {
    // INFORMACION DE LA MASCOTA PERDIDA
    idmp: string;
    uid: string;
    raza: string;
    tamano: string;
    edad: number;
    nombre:string;
    sexo:string;
    descripcion:string;
    perdida:string;
    imagenprincipal:string;
    imagen2:string;
    imagen3:string;
    imagen4:string;
    // UBICACION
    ciudad: string;
    barrio: string;
    fechaperdida: string;
    // CONTACTO
    nombredueno:string;
    tel1: number;
    tel2: number;
    mail: string;

}
