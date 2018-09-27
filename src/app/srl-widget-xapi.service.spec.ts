import { TestBed, inject } from '@angular/core/testing';

import { SrlWidgetXapiService } from './srl-widget-xapi.service';

describe('SrlWidgetXapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SrlWidgetXapiService]
    });
  });

  it('should be created', inject([SrlWidgetXapiService], (service: SrlWidgetXapiService) => {
    expect(service).toBeTruthy();
  }));
});
