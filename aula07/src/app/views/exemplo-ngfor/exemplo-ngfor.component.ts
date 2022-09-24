import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-ngfor',
  templateUrl: './exemplo-ngfor.component.html',
  styleUrls: ['./exemplo-ngfor.component.css']
})
export class ExemploNgforComponent implements OnInit {

    animais = ['gato','cachorro', 'calopsita', 'onça', 'papagaio'];

    filmes = ['Titanic', 'A orfã', 'Hobbit'];
    notas  = [9, 8, 9];

  constructor() { }

  ngOnInit(): void {
  }

}
