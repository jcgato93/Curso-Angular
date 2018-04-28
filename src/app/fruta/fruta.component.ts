import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent implements OnInit {

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

      //Variables y alcance 
      var uno = 8;
      var dos = 15;

      if (uno === 8) {
          let uno = 3;//lef sirve para declarar una variable defienida dentro de un bloque de codigo
          var dos = 88;
          console.log("dentro del if : "+uno);
      }
      console.log("fuera del if :"+uno);
  }


  //#region  metodos
  //Metodo
  holaMundo(nombre:String)
  {
      alert('Hola mundo '+nombre);        
  }
  //#endregion

}
