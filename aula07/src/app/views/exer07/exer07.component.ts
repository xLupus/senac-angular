import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exer07',
  templateUrl: './exer07.component.html',
  styleUrls: ['./exer07.component.css']
})
export class Exer07Component implements OnInit {

    nomes: string[] = [];
    nome            = '';

    constructor() { }

    ngOnInit(): void {
    }

    add(): void {
        this.nomes.push(this.nome);
    }

}
