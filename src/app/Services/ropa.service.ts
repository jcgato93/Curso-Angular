// tslint:disable-next-line:eofline
import { Injectable } from '@angular/core' ;

@Injectable()
export class RopaService {
    public nombre_prenda = 'Pantalones vaqueros';

    prueba(nombre_prenda) {
        return this.nombre_prenda;
    }
}
