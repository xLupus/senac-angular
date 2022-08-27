import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exer2',
  templateUrl: './exer2.component.html',
  styleUrls: ['./exer2.component.css']
})

export class Exer2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  LowerToUpper(texto: string){ return texto.toUpperCase(); }

}
