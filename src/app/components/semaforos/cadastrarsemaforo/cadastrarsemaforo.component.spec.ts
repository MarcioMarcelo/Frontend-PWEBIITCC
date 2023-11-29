import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarsemaforoComponent } from './cadastrarsemaforo.component';

describe('CadastrarsemaforoComponent', () => {
  let component: CadastrarsemaforoComponent;
  let fixture: ComponentFixture<CadastrarsemaforoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarsemaforoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarsemaforoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
