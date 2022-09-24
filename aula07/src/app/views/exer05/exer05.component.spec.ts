import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer05Component } from './exer05.component';

describe('Exer05Component', () => {
  let component: Exer05Component;
  let fixture: ComponentFixture<Exer05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exer05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exer05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
