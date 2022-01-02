import { TestBed } from '@angular/core/testing';

import { GetMangerService } from './get-manger.service';

describe('GetMangerService', () => {
  let service: GetMangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
