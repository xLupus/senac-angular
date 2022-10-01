import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer06Component } from './exer06.component';

describe('Exer06Component', () => {
  let component: Exer06Component;
  let fixture: ComponentFixture<Exer06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exer06Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exer06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
