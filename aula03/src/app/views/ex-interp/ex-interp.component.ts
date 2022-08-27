import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-interp',
  templateUrl: './ex-interp.component.html',
  styleUrls: ['./ex-interp.component.css']
})
export class ExInterpComponent implements OnInit {

    propriedade = 'teste';
    valor1 = 10;
    valorClasseCSS = 'minha-classe';

    constructor() { }

    ngOnInit(): void {
    }

    obterNome(){ return 'Lupus';}

    somar(num1: number, num2: number){return num1 + num2;}
}
