import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/model/jogo';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  jogos: Jogo[] = [];
  jogoSelecionado?: Jogo;

  constructor(private gameService: GameService) {
    const jogo  = new Jogo();
    const jogo2 = new Jogo();

    jogo.nome        = 'The Last of Us';
    jogo.plataforma  = 'PS4';
    jogo.genero      = 'Survival Horror';

    jogo2.nome       = 'Valorant';
    jogo2.plataforma = 'PC';
    jogo2.genero     = 'FPS';

    gameService.inserir(jogo);
    gameService.inserir(jogo2);
  }

  ngOnInit(): void {
    this.atualizarLista();
  }

  atualizarLista() {
    this.jogos = this.gameService.listar();
  }

  selecionarJogo( jogo: Jogo) {
    this.jogoSelecionado = jogo;
  }

}
