import { Component, OnInit, Renderer2, Input } from "@angular/core";
import { DailyPlan } from "../models/daily-plan";
import { TrackingItem } from "../models/tracking-item";

@Component({
  selector: "app-reason",
  templateUrl: "./reason.component.html",
  styleUrls: ["./reason.component.css"]
})
export class ReasonComponent implements OnInit {
  public activities: any;
  @Input() dailyPlan: DailyPlan;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.activities = [
      {
        name: "Other responsibilities",
        icon: "face",
        selected: true
      },
      {
        name: "More time-consuming than expected",
        icon: "settings_input_antenna",
        selected: false
      },
      {
        name: "Need for group discussion",
        icon: "group",
        selected: false
      },
      // {
      //   name: "Work",
      //   icon: "attach_money",
      //   selected: false
      // },
      {
        name: "Lack of information",
        icon: "contact_support",
        selected: false
      }
    ];
  }

  onActivityToggled(activity: TrackingItem) {
    console.log("Activity toggled: ", activity);
    const name = activity.name;
    const index = this.dailyPlan.reasonsForNotReachingGoals.indexOf(name);
    if(index === -1 && activity.selected){
      this.dailyPlan.reasonsForNotReachingGoals.push(name);
    }
    else if (index > -1 && !activity.selected){
      this.dailyPlan.reasonsForNotReachingGoals = this.dailyPlan.reasonsForNotReachingGoals.slice(index, 1);
    }
  }
}
