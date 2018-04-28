import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

 public nombre:String;
 public apellido:String;

  constructor() { 
    this.nombre="test component";
    this.apellido="test apellido";
  }

  ngOnInit() {
  }

}
