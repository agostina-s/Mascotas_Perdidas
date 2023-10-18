export interface Mascotas {
    // INFORMACION DE LA MASCOTA
    uid: string;
    raza: string;
    tamaño: string;
    edad: number;
    nombre:string;
    sexo:string;
    descripcion:string;
    perdida:string;
    imagenprincipal:string;
    imagenn2:string;
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
