import { TestBed } from '@angular/core/testing';

import { CtcMissions } from './ctc-missions';

describe('CtcMissions', () => {
  let service: CtcMissions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CtcMissions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
