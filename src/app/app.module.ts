import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//FIREBASE
import { enviroment } from 'src/enviroments/enviroment';
import { AngularFireModule} from '@angular/fire/compat'; //importacion de firestore (BD)
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; //importacion de AUTH
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { EditarmascotaComponent } from './modules/editarmascota/editarmascota.component';
 // importacion de storage (para imagenes)



@NgModule({
  declarations: [
    AppComponent,
    EditarmascotaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //importacion shared
    SharedModule,
    //modulos de firebase
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
