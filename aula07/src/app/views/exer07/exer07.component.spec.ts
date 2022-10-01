import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer07Component } from './exer07.component';

describe('Exer07Component', () => {
  let component: Exer07Component;
  let fixture: ComponentFixture<Exer07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exer07Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exer07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
