import { TestBed } from '@angular/core/testing';

import { RestestService } from './restest.service';

describe('RestestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestestService = TestBed.get(RestestService);
    expect(service).toBeTruthy();
  });
});
