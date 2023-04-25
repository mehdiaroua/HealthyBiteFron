import { TestBed } from '@angular/core/testing';

import { RepasProduitService } from './repas-produit.service';

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
