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
        name: "Great Food",
        icon: "restaurant_menu",
        selected: false
      },
      {
        name: "Cleaning",
        icon: "gesture",
        selected: false
      },
      {
        name: "Listening to music",
        icon: "music_note",
        selected: false
      },
      {
        name: "Dating",
        icon: "favorite",
        selected: false
      },
      {
        name: "Reading",
        icon: "chrome_reader_mode",
        selected: false
      },
      {
        name: "Shopping",
        icon: "shopping_cart",
        selected: false
      }
    ];
  }
}
