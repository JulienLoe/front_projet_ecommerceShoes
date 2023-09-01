import { TestBed } from '@angular/core/testing';

import { HeelServiceService } from './heel-service.service';

describe('HeelServiceService', () => {
  let service: HeelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
