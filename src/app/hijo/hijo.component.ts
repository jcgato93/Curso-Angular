import { Component, Input } from '@angular/core';


@Component({
    selector: 'componente-hijo',
    template: `
    <hr/>
    <p>Este es el {{title}}</p>
    <ul>
    <li>{{propiedad_uno}}</li>
    <li>{{propiedad_dos}}</li>
    <li>{{propiedad_tres}}</li>
    <li>{{propiedad_4}}</li>
    </ul>
    `
})
export class HijoComponent{
    public title: string;

    @Input() propiedad_uno: string;  //se usa el decorador @Input para indicar que la propiedad llegara desde otro recurso
    
    @Input('texto') propiedad_dos: string; // con las comillas simples dentro del input se puede especificar el valor de la propidad para recibir datos

    @Input() propiedad_tres: string;
    @Input() propiedad_4: string;
    @Input() propiedad_5: string;

    constructor(){
        this.title="Componente Hijo"
    }

    ngOnInit(){
        console.log(this.propiedad_5);
    }

}