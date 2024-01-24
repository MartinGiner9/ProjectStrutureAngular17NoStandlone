import { TestBed } from '@angular/core/testing';

import { DemoPageService } from './demoPage.service';

describe('ShiftService', () => {
  let service: DemoPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
