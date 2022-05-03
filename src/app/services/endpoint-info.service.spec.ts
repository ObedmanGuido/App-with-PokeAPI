import { TestBed } from '@angular/core/testing';

import { EndpointInfoService } from './endpoint-info.service';

describe('EndpointInfoService', () => {
  let service: EndpointInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndpointInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
