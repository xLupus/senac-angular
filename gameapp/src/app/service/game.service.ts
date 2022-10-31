import { Injectable } from '@angular/core';
import { Jogo } from '../model/jogo';

@Injectable({
  providedIn: 'root'
})
export class GameService {
    private jogos: Jogo[] = []; //Dados em memoria
    private idGerado = 1; // ID gerado automaticamente

    constructor() { }

    inserir(jogo?: Jogo) {
        if (!jogo) return

        jogo.id = this.idGerado;
        this.jogos.push(jogo);
        this.idGerado++;

        this.salvar();
    }

    listar(): Jogo[] {
        this.ler();

        return this.jogos;
    }

    remover(id: number) {
        this.jogos = this.jogos.filter( jogo => jogo.id != id );

        this.salvar();
    }

    atualizar(jogo?: Jogo) {
        if (!jogo) return

        const index = this.jogos.findIndex( j => j.id == jogo.id);

        if (index >= 0){
            this.jogos[index] = jogo;
            this.salvar();
        }
    }

    salvar() {
        const DADOS_JSON = JSON.stringify(this.jogos);

        localStorage.setItem( 'jogos', DADOS_JSON );
        localStorage.setItem( 'idGerado', this.idGerado.toString() );
    }

    ler() {
        const DADOS_JSON = localStorage.getItem('jogos');
        const ID_GERADO  = localStorage.getItem('idGerado')

        if (DADOS_JSON)
            this.jogos = JSON.parse(DADOS_JSON);

        if (ID_GERADO)
            this.idGerado = Number(ID_GERADO)
    }
}
