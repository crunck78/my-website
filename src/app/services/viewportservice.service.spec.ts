import { TestBed } from '@angular/core/testing';

import { ViewportserviceService } from './viewportservice.service';

describe('ViewportserviceService', () => {
  let service: ViewportserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewportserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
