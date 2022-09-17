import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exer02',
  templateUrl: './exer02.component.html',
  styleUrls: ['./exer02.component.css']
})
export class Exer02Component implements OnInit {

/*
    imagem = '';
*/
    src = '';
    cachorro = '';

  constructor() { }

  ngOnInit(): void {
  }

    getCachorro(){
        if(this.cachorro == 'chihuahua')
            this.src = 'assets/chihuahua.png';

        else if(this.cachorro == 'doberman')
            this.src = 'assets/doberman.png';

        else if(this.cachorro == 'doberman')
            this.src = 'assets/doberman.png';

        else
            this.src = '';
    }

}
