import { TestBed } from '@angular/core/testing';

import { CvService } from './cv.service';

describe('CvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CvService = TestBed.get(CvService);
    expect(service).toBeTruthy();
  });
});
