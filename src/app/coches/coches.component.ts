import { Component, OnInit } from '@angular/core';
import { Coche } from './coches';

//Servicios
import { PeticionesService } from '../Services/peticiones.service';


@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css'],
  providers: [PeticionesService]
  
})
export class CochesComponent implements OnInit {

  public coche: Coche;
  public coches: Array<Coche>;

  public articulos;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.coche = new Coche("","","");

    this.coches = [
      new Coche("Seat Panda","120","Blanco"),
      new Coche("Renaut Clio","110","Azul")
    ]
   }

  ngOnInit() {
    this._peticionesService.getArticulos().subscribe(
      result =>{
        this.articulos = result;
        if (!this.articulos) {
          console.log("Erro en el servidor");
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
      }

    );
  }


  onSubmit(){
    this.coches.push(this.coche);
    this.coche = new Coche("","","");
  }

}
