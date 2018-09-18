import { Component, OnInit } from "@angular/core";

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
        name: "Sport",
        icon: "rowing"
      },
      {
        name: "Gaming",
        icon: "videogame_asset"
      },
      {
        name: "Movie",
        icon: "tv"
      },
      {
        name: "Sleeping",
        icon: "local_hotel"
      },
      {
        name: "Eating",
        icon: "local_hotel"
      }
    ];
  }

  activityClick(event: any, activity: any) {
    console.log("Event: ", event);
    console.log("Clicked on activity: ", activity);
    this.renderer.addClass(event.srcElement, "selected-activity");
  }
}
