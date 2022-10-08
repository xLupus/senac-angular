import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/model/filme';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

    filmes: Filme[] = [];
    filmeSelecionado?: Filme;

    constructor() {
      const filme1 = new Filme();

      filme1.nome  = 'O Hobbit';
      filme1.nota  = 7;

      const filme2   = new Filme();
      filme2.nome = 'Harry Potter';
      filme2.nota = 7;

      this.filmes.push(filme1, filme2);
    }

    ngOnInit(): void {
    }

    selecionarFilme(filme: Filme){
        this.filmeSelecionado = filme;
    }

    fechar(){
        this.filmeSelecionado = undefined;
    }

    novoFilme(){
        this.filmeSelecionado = new Filme();
        this.filmes.push(this.filmeSelecionado);
    }

    removerFilme(index: number){
        this.filmes.splice(index, 1);
        this.fechar();
    }
}
