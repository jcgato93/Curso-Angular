import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';//para trabajar con parametros en las peticiones

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent  {

 public titulo = "Página de contacto"
 
 public parametro;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    
  }

  ngOnInit() {
    //captura los parametros de la url
    this._route.params.forEach((params: Params) => {
        this.parametro = params['page'];
    })

  }

}
