import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exer01',
  templateUrl: './exer01.component.html',
  styleUrls: ['./exer01.component.css']
})
export class Exer01Component implements OnInit {

    num1 = 0;
    num2 = 0;

  constructor() { }

  ngOnInit(): void {
  }

  multiplicar(){
      return this.num1 * this.num2;

}
}
