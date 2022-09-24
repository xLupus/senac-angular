import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exer05',
  templateUrl: './exer05.component.html',
  styleUrls: ['./exer05.component.css']
})
export class Exer05Component implements OnInit {

    paises = ['Brasil','Guiana Francesa', 'Cuba', 'Japão'];

  constructor() { }

  ngOnInit(): void {
  }

  exibirPais(pais: string){
      alert(pais);
  }
}
