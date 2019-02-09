import { TestBed } from '@angular/core/testing';

import { SwitchesService } from './switches.service';

describe('SwitchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwitchesService = TestBed.get(SwitchesService);
    expect(service).toBeTruthy();
  });
});
