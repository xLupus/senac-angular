import { Injectable } from '@angular/core';
import { Jogo } from '../model/jogo';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private jogos: Jogo[] = []; //Dados em memoria
  private idGerado = 1; // ID gerado automaticamente

  constructor() { }

  inserir(jogo: Jogo) {
    jogo.id = this.idGerado;
    this.jogos.push(jogo);
    this.idGerado++;
  }

  listar(): Jogo[] {
    return this.jogos;
  }

  remover(id: number) {
    this.jogos = this.jogos.filter( jogo => jogo.id != id );
  }

  atualizar(jogo: Jogo) {
    const index = this.jogos.findIndex( j => j.id == jogo.id);

    if (index >= 0)
      this.jogos[index] = jogo;

  }
}
