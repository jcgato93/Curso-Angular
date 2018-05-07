// tslint:disable-next-line:eofline
import { Injectable } from '@angular/core' ;

@Injectable()
export class RopaService {
    public nombre_prenda = 'Pantalones vaqueros';
    public coleccion_ropa = ['Pantalones Blancos','Camiseta roja'];

    prueba(nombre_prenda) {
        return this.nombre_prenda;
    }

     // de este modo se indica el tipo de dato que retornara
     /**
      * 
      * @param nombre_prenda 
      * @returns Arry<string>
      */
    addRopa(nombre_prenda: string):Array<string> {
        this.coleccion_ropa.push(nombre_prenda);
        return this.getRopa();
    }


    /**
     * Elimina un elemento del array segun su indice
     * @param index 
     */
    deleteRopa(index: number){
        this.coleccion_ropa.splice(index, 1);

        return this.getRopa();
    }

    getRopa():Array<string>{
        return this.coleccion_ropa;
    }


  

}
