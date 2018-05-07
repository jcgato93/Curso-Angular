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

  constructor(
    private _ropaService: RopaService
  ) { }

  ngOnInit() {
    console.log( this._ropaService.prueba('Camiseta'));
  }


}
