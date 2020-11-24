import { TestBed } from '@angular/core/testing';

import { UserSetupServiceService } from './user-setup-service.service';

describe('UserSetupServiceService', () => {
  let service: UserSetupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSetupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
