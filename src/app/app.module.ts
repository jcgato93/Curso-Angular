import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import rutas
import { routing, appRoutingProvaiders } from './app.routing';

import { AppComponent } from './app.component';
import { FrutaComponent} from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent    
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
