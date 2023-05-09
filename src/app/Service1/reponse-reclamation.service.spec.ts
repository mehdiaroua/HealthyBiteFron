import { TestBed } from '@angular/core/testing';

import { ReponseReclamationService } from './reponse-reclamation.service';

describe('ReponseReclamationService', () => {
  let service: ReponseReclamationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReponseReclamationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
