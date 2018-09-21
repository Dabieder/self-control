import { TestBed, inject } from "@angular/core/testing";

import { WeeklyPlanningService } from "./weekly-planning.service";

describe("WeeklyPlanningService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeeklyPlanningService]
    });
  });

  it("should be created", inject(
    [WeeklyPlanningService],
    (service: WeeklyPlanningService) => {
      expect(service).toBeTruthy();
    }
  ));
});
