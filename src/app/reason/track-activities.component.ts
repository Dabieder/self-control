import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-track-activities",
  templateUrl: "./track-activities.component.html",
  styleUrls: ["./track-activities.component.css"]
})
export class TrackActivitiesComponent implements OnInit {
  public activities: any;

  constructor() {}

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
}
