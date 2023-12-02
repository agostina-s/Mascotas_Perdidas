import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Importaciones del módulo de enrutamiento y el componente principal de la aplicación
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Importaciones del módulo compartido
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//FIREBASE
import { enviroment } from 'src/enviroments/enviroment';
import { AngularFireModule} from '@angular/fire/compat'; //importacion de firestore (BD)
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; //importacion de AUTH de fb 
import { AngularFireStorageModule } from '@angular/fire/compat/storage';// importacion de storage almacenamiento (para imagenes)



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //importacion shared
    SharedModule,
    //modulos de firebase
    AngularFireModule.initializeApp(enviroment.firebaseConfig),  // Inicialización de la configuración de Firebase
    AngularFireAuthModule, // Módulo de autenticación de Firebase
    AngularFireStorageModule, // Módulo de almacenamiento de Firebase (para imágenes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
