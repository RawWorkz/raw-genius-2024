import { TestBed } from '@angular/core/testing';

import { RawSessionsService } from './raw-sessions.service';

describe('RawSessionsService', () => {
  let service: RawSessionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RawSessionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
