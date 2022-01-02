import { TestBed } from '@angular/core/testing';

import { GetEmpDataService } from './get-emp-data.service';

describe('GetEmpDataService', () => {
  let service: GetEmpDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEmpDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
