import { TestBed } from '@angular/core/testing';

import { RepasProduitService } from './repasProduit.service';

describe('RepasProduitService', () => {
  let service: RepasProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepasProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
