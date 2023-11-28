// Definición de la interfaz Mascotasencontrada
export interface Mascotasencontrada {
    uid:string; // Identificador único de la mascota encontrada
    raza:string; //raza mascota
    tamaño:string; //tamaño mascota
    collar:string; // Collar si/no
    nombre:string;   // Nombre de la mascota
    sexo:string;  // Sexo de la mascota
    descripcion:string; // Descripción general de la mascota 
    imagenprincipal:string; // Ruta o enlace a la imagen principal de la mascota
    imagenn2:string;  // Ruta o enlace a la segunda imagen de la mascota
    imagenn3:string;  // Ruta o enlace a la tercera imagen de la mascota 
    imagenn4:string; // Ruta o enlace a la cuarta imagen de la mascota
}
