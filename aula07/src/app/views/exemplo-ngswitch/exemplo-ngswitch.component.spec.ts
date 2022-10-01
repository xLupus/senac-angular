import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNgswitchComponent } from './exemplo-ngswitch.component';

describe('ExemploNgswitchComponent', () => {
  let component: ExemploNgswitchComponent;
  let fixture: ComponentFixture<ExemploNgswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploNgswitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploNgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
