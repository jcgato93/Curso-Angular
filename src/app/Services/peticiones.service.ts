import { Injectable } from '@angular/core';//trabajar con inyeccion de dependencias
import { Http, Response, Headers } from '@angular/http'; //para peticiones http
import 'rxjs/add/operator/map'  //para mapear las respuestas http
import { Observable } from 'rxjs/observable';//para manipulacion de las respuestas

@Injectable()
export class PeticionesService{

    public url: string;

    constructor(
        private _http: Http
    ){
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }


    getPrueba(){
        
    }

    getArticulos(){
        return this._http.get(this.url)
                            .map(res => res.json())//recoger respuesta http y la convierte en json usable para javascript
    }
}