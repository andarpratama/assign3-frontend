import { TestBed } from '@angular/core/testing';

import { RupiahFormatService } from './rupiah-format.service';

describe('RupiahFormatService', () => {
  let service: RupiahFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RupiahFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
