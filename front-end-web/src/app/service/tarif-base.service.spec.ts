import { TestBed } from '@angular/core/testing';

import { TarifBaseService } from './tarif-base.service';

describe('TarifBaseService', () => {
  let service: TarifBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarifBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
