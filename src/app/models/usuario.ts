//este es el interfaz para el inicio de sesion del usuario
export interface Usuario {
    uid: string | any; // user id => id para auth de firebase
    email: string;
    password: string;
    name: string; 
    foto: string;
    descripcion: string;
    ubicacion: any;
}