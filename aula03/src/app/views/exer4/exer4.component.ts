import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exer4',
  templateUrl: './exer4.component.html',
  styleUrls: ['./exer4.component.css']
})
export class Exer4Component implements OnInit {

  firstImage  = 'assets/img1.jfif';
  secondImage = 'assets/img2.jfif';
  thirdImage  = 'assets/img3.jpg';

  firstClass  = 'class1';
  secondClass = 'class2';
  thirdClass  = 'class3';

  constructor() { }

  ngOnInit(): void {
  }

}
