import { TestBed } from '@angular/core/testing';

import { Configure2Service } from './configure2.service';

describe('Configure2Service', () => {
  let service: Configure2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Configure2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
