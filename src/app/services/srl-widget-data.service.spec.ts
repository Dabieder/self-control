import { TestBed, inject } from '@angular/core/testing';

import { SrlWidgetDataService } from './srl-widget-data.service';

describe('SrlWidgetDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SrlWidgetDataService]
    });
  });

  it('should be created', inject([SrlWidgetDataService], (service: SrlWidgetDataService) => {
    expect(service).toBeTruthy();
  }));
});
