import { TestBed } from '@angular/core/testing';

import { ClassroomApiService } from './classroom-api.service';

describe('ClassroomApiService', () => {
  let service: ClassroomApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassroomApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
