import { TestBed } from '@angular/core/testing';

import { UserJwtControllerService } from './user-jwt-controller.service';

describe('UserJwtControllerService', () => {
  let service: UserJwtControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserJwtControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
