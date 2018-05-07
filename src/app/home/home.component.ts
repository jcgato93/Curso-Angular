import { Component, OnInit } from '@angular/core';
import { RopaService } from '../Services/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService] // injeccion de dependencias para tenerlas instanciadas
})
export class HomeComponent  {

public titulo = 'Página principal';
public listado_ropa: Array<string>;
public prenda_a_guardar: string;

  constructor(
    private _ropaService: RopaService
  ) { }

  ngOnInit() {
    this.listado_ropa=this._ropaService.getRopa();
    console.log( this._ropaService.prueba('Camiseta'));
  }

  guardarPrenda(){
     this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar = null;
  }

  eliminarPrenda(index: number){
    this._ropaService.deleteRopa(index);
  }

}
