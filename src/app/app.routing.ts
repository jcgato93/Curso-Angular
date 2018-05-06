import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

//array de rutas
const appRoutes: Routes = [
    {path : '', component: HomeComponent},//cuando no se escriba la ruta especifica llamara al componente que se pase por parametro
    {path: 'home', component: HomeComponent},
    {path: 'empleado', component: EmpleadoComponent},
    {path: 'fruta', component: FrutaComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'contacto/:page', component: ContactoComponent},


    {path: '**', component: HomeComponent} //cuando la rute falle, errores como el 404
];


export const appRoutingProvaiders: any[] = []; //esto es algo que necesita angular para cargar el provider de las rutas
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); //cargar las rutas en la configuracion del framework