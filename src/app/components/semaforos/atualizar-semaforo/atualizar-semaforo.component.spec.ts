import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarSemaforoComponent } from './atualizar-semaforo.component';

describe('AtualizarSemaforoComponent', () => {
  let component: AtualizarSemaforoComponent;
  let fixture: ComponentFixture<AtualizarSemaforoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarSemaforoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarSemaforoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
