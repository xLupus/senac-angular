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
    estaEditando = false;

    constructor(private gameService: GameService) {

    }

    ngOnInit(): void {
        this.atualizarLista();
    }

    atualizarLista() {
        this.jogos = this.gameService.listar();
    }

    selecionarJogo( jogo: Jogo) {
        this.jogoSelecionado = jogo;
        this.estaEditando = true;
    }

    salvar() {
        if (this.estaEditando)
            this.gameService.atualizar(this.jogoSelecionado);

        else
            this.gameService.inserir(this.jogoSelecionado);

        this.cancelar();
    }

    cancelar() {
        this.jogoSelecionado = undefined;
        this.atualizarLista();
    }

    novo() {
        this.jogoSelecionado = new Jogo;
        this.estaEditando = false
    }

    excluir(id?: number) {
        if (!id) return

        this.gameService.remover(id);
        this.atualizarLista()
    }
}
