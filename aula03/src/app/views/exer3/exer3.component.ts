import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exer3',
  templateUrl: './exer3.component.html',
  styleUrls: ['./exer3.component.css']
})

export class Exer3Component implements OnInit {

  classePais = 'pais';

  constructor() { }

  ngOnInit(): void {
  }

 /**
 * Funcao para converter string com caracteres minusculos em caracteres maiusculos.
 * @param  texto  String a ser convertida para Maisculo.
 * @return Texto em Maisculo.
 */
  LowerToUpper(texto: string){ return texto.toUpperCase(); }

}
