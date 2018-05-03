import { Component, OnInit } from '@angular/core';

import { Empleado } from './empleado';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  public titulo = 'Componente Empleados:';

  public empleado: Empleado;
  public trabajadores: Array<Empleado>;
  public tabajador_externo: Boolean;
  public color: String;

  constructor() {
    this.empleado = new Empleado('David Lopez', 45, 'Cocinero', true);
    this.trabajadores = [
      new Empleado('Manolo Martinez', 35, 'Administrativo', true),
      new Empleado('Ana Lopez', 25, 'Cocinera', true),
      new Empleado('Victor Robles', 66, 'Programador', false)
    ];

    this.tabajador_externo = true;
    this.color = 'blue';
  }

  ngOnInit() {

  }


  cambiarExterno(valor)  {
    this.tabajador_externo = valor;   
  }

}
