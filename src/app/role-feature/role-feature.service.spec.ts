/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoleFeatureService } from './role-feature.service';

describe('Service: RoleFeature', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleFeatureService]
    });
  });

  it('should ...', inject([RoleFeatureService], (service: RoleFeatureService) => {
    expect(service).toBeTruthy();
  }));
});
