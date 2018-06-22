import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent implements OnInit {

public titulo;
public administrador;

public dato_externo= "Juan C";
public identity={
  id:1,
  web: 'Net.Service.es',
  tematica: 'Informatica'
};

  constructor() { 
    this.titulo = "Plantillas ngTemplates en Angular";
    this.administrador = true;
  }

  ngOnInit() {
  }


  cambiar(){
    this.administrador=!this.administrador;
  }

}
