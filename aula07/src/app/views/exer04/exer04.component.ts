import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exer04',
  templateUrl: './exer04.component.html',
  styleUrls: ['./exer04.component.css']
})
export class Exer04Component implements OnInit {

    imagens = ['assets/chihuahua.png',
               'assets/doberman.png',
               'assets/viralata.png']
               
  constructor() { }

  ngOnInit(): void {
  }

}
