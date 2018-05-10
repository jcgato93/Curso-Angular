import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


//Pipes 
import { ConversorPipe } from './pipes/conversor.pipe'; 

//import rutas
import { routing, appRoutingProvaiders } from './app.routing';

import { AppComponent } from './app.component';
import { FrutaComponent} from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,//pipe personalizado
    CochesComponent,
   PlantillasComponent   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    routing//rutas
  ],
  providers: [
    appRoutingProvaiders//provee configuracion de rutas
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
