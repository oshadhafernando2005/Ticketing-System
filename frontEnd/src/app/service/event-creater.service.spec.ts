import { TestBed } from '@angular/core/testing';

import { EventCreaterService } from './event-creater.service';

describe('EventCreaterService', () => {
  let service: EventCreaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventCreaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
