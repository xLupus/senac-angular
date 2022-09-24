import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exer03',
  templateUrl: './exer03.component.html',
  styleUrls: ['./exer03.component.css']
})
export class Exer03Component implements OnInit {

    num1     = 0;
    num2     = 0;
    valor    = 0;
    operacao = '';

  constructor() { }

  ngOnInit(): void {
  }

  somar(){
      this.valor = this.num1 + this.num2;
      return this.valor
  }
  subtrair(){
      this.valor = this.num1 - this.num2;
      return this.valor
  }
  dividir(){
      this.valor = this.num1 / this.num2;
      return this.valor
  }
  multiplicar(){
      this.valor = this.num1 * this.num2;
      return this.valor
  }
}
