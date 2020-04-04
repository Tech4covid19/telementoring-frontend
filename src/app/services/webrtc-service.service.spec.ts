import { TestBed } from '@angular/core/testing';

import { WebrtcServiceService } from './webrtc-service.service';

describe('WebrtcServiceService', () => {
  let service: WebrtcServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebrtcServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
