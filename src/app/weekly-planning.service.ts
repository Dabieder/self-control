import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "./reducers";
import { WeeklyPlan } from "./models/weekly-plan";
import { WeekService } from "./week.service";

@Injectable({
  providedIn: "root"
})
export class WeeklyPlanningService {
  selectedWeeklyPlan: WeeklyPlan;

  constructor(private store: Store<State>, private weekService: WeekService) {
    this.initialize();
  }

  initialize() {
    // this.store.select(store => store.srlWidget).subscribe(widget => {
    //   this.selectedWeeklyPlan = widget.selectedWeeklyPlan;
    //   const weekAsKey = this.weekService.toDictionaryKey(
    //     widget.selectedWeeklyPlan.weekStartDate
    //   );
    //   if (widget.weeklyPlans[weekAsKey]) {
    //   } else {
    //   }
    // });
  }
}
