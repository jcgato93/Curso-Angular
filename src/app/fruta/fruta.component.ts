import {Component} from '@angular/core';

@Component({
    selector:'fruta',
    templateUrl: './fruta.component.html'
   
})

export class FrutaComponent{
    public nombre_componente= 'Componente de fruta'
    public listado_frutas= 'Naranja, Manzana, Pera y Sandia'

    public nombre:String = 'juan';
    public edad: Number = 24;
    public isMayorEdad:Boolean = true;
    public trabajos:Array<any> = ['soldador','mesero'];
    comodin:any =23;

    //Metodo constructor
    constructor(){
    
        console.log(this.trabajos);
         
        this.nombre ='otro';
        console.log(this.nombre);

        
    }

    //Es el primer metodo que se ejecuta 
    //luego de del constructor 
    ngOnInit()
    {
    //llamar metodo
    this.holaMundo(this.nombre);
    }


    //Metodo
    holaMundo(nombre:String)
    {
        alert('Hola mundo '+nombre);        
    }
}