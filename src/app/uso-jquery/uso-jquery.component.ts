import { Component, OnInit } from '@angular/core';

//declarar variables globales
declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-uso-jquery',
  templateUrl: './uso-jquery.component.html',
  styleUrls: ['./uso-jquery.component.css']
})
export class UsoJqueryComponent implements OnInit {

  public title:string;

  constructor() { 
     this.title='Usando jquery desde TypeScript';

  }

  ngOnInit() {
  }

  public toggleTitle(){
    console.log('click!!');
    $('.title').slideToggle();
  }

}
