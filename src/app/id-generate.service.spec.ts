import { TestBed } from '@angular/core/testing';

import { IdGenerateService } from './id-generate.service';

describe('IdGenerateService', () => {
  let service: IdGenerateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdGenerateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
