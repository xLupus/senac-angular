import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nome',
  templateUrl: './nome.component.html',
  styleUrls: ['./nome.component.css']
})
export class NomeComponent implements OnInit {

  nome = 'Vinicius';

  constructor() { }

  ngOnInit(): void {
  }

}
