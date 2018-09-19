import { Component, OnInit, Renderer2 } from "@angular/core";

@Component({
  selector: "app-reason",
  templateUrl: "./reason.component.html",
  styleUrls: ["./reason.component.css"]
})
export class ReasonComponent implements OnInit {
  public activities: any;

  constructor(private renderer: Renderer2) {}

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

  activityClick(event: any, activity: any) {
    console.log("Event: ", event);
    console.log("Clicked on activity: ", activity);
    this.renderer.addClass(event.srcElement, "selected-activity");
  }
}
