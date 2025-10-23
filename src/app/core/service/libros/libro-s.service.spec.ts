import { TestBed } from '@angular/core/testing';

import { LibroSService } from './libro-s.service';

describe('LibroSService', () => {
  let service: LibroSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibroSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
