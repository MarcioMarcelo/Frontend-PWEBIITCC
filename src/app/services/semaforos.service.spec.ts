import { TestBed } from '@angular/core/testing';

import { SemaforosService } from './semaforos.service';

describe('SemaforosService', () => {
  let service: SemaforosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemaforosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
