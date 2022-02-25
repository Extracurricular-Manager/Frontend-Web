import { TestBed } from '@angular/core/testing';

import { TimeSlotModelService } from './time-slot-model.service';

describe('TimeSlotModelService', () => {
  let service: TimeSlotModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeSlotModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
