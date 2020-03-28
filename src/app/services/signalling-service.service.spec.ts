import { TestBed } from '@angular/core/testing';

import { SignallingServiceService } from './signalling-service.service';

describe('SignallingServiceService', () => {
  let service: SignallingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignallingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
