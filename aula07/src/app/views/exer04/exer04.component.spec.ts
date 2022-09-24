import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer04Component } from './exer04.component';

describe('Exer04Component', () => {
  let component: Exer04Component;
  let fixture: ComponentFixture<Exer04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exer04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exer04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
