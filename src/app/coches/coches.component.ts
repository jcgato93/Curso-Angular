import { Component, OnInit } from '@angular/core';
import { Coches } from './coches';


@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {

  public coche: Coches;

  constructor() {
    this.coche = new Coches("","","");
   }

  ngOnInit() {
  }


  onSubmit(){
    console.log(this.coche);
  }

}
