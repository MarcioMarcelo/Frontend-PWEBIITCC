import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSemaforoComponent } from './card-semaforo.component';

describe('CardSemaforoComponent', () => {
  let component: CardSemaforoComponent;
  let fixture: ComponentFixture<CardSemaforoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSemaforoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSemaforoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
