import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer08Component } from './exer08.component';

describe('Exer08Component', () => {
  let component: Exer08Component;
  let fixture: ComponentFixture<Exer08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exer08Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exer08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
