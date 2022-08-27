import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exer1',
  templateUrl: './exer1.component.html',
  styleUrls: ['./exer1.component.css']
})
export class Exer1Component implements OnInit {

  nome      = 'Vinicius';
  sobrenome = 'Souza';

  constructor() { }

  ngOnInit(): void {
  }

}
