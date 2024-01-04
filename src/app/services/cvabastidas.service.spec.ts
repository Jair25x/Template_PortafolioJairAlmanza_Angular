import { TestBed } from '@angular/core/testing';

import { CvabastidasService } from './portJairAlmanza.service';

describe('CvabastidasService', () => {
  let service: CvabastidasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvabastidasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
