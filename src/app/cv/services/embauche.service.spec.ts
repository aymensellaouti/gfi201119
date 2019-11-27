import { TestBed } from '@angular/core/testing';

import { EmbaucheService } from './embauche.service';

describe('EmbaucheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmbaucheService = TestBed.get(EmbaucheService);
    expect(service).toBeTruthy();
  });
});
