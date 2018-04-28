import { Component, OnInit } from '@angular/core';

import { Empleado } from './empleado';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  public empleado:Empleado;

  constructor() { 
    
  }

  ngOnInit() {
    this.empleado=new Empleado('juan',24,'developer',true);
  }

}
