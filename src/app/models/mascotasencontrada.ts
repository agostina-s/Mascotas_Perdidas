// Definición de la interfaz Mascotasencontrada
export interface Mascotasencontrada {
    idme:string; // Identificador único de la mascota encontrada
    raza:string; //raza mascota
    tamano:string; //tamaño mascota
    collar:string; // Collar si/no
    nombre:string;   // Nombre de la mascota
    sexo:string;  // Sexo de la mascota
    descripcion:string; // Descripción general de la mascota 
    imagenprincipal:string; // Ruta o enlace a la imagen principal de la mascota
    img2:string;  // Ruta o enlace a la segunda imagen de la mascota
    img3:string;  // Ruta o enlace a la tercera imagen de la mascota 
    img4:string; // Ruta o enlace a la cuarta imagen de la mascota
    // UBICACION
    ciudad: string;
    barrio: string;
    fechaencuentro: string;
    // CONTACTO
    nombrepublicador:string;
    tel1: number;
    tel2: number;
    mail: string;
}
