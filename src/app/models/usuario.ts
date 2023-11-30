//declaracion de el interfaz para el inicio de sesion del usuario /propiedades 
export interface Usuario {
    uid: string | any; // user id => id para auth de firebase
    name: string; 
    email: string;
    password: string;
}