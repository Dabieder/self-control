import { Component, OnInit, Renderer2 } from "@angular/core";

@Component({
  selector: "app-track-activities",
  templateUrl: "./track-activities.component.html",
  styleUrls: ["./track-activities.component.css"]
})
export class TrackActivitiesComponent implements OnInit {
  public activities: any;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.activities = [
      {
        name: "Sport",
        icon: "rowing",
        selected: false
      },
      {
        name: "Gaming",
        icon: "videogame_asset",
        selected: false
      },
      {
        name: "Movie",
        icon: "tv",
        selected: false
      },
      {
        name: "Sleeping",
        icon: "local_hotel",
        selected: false
      },
      {
        name: "Eating",
        icon: "local_hotel",
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
