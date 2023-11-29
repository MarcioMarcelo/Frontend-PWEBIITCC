import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarsemaforosComponent } from './listarsemaforos.component';

describe('ListarsemaforosComponent', () => {
  let component: ListarsemaforosComponent;
  let fixture: ComponentFixture<ListarsemaforosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarsemaforosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarsemaforosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
