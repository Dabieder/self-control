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
        name: "Not in the mood",
        icon: "face",
        selected: true
      },
      {
        name: "Too difficult",
        icon: "settings_input_antenna",
        selected: false
      },
      {
        name: "Social life",
        icon: "group",
        selected: false
      },
      {
        name: "Work",
        icon: "attach_money",
        selected: false
      },
      {
        name: "Stress",
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
