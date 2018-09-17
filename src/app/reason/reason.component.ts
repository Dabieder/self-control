import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.css']
})
export class ReasonComponent implements OnInit {

  activities: [
    {
      "name": "Sport",
      "icon": "rowing"
    },
    {
      "name": "Gaming",
      "icon": "videogame_asset"
    },
    {
      "name": "Movie",
      "icon": "tv"
    },
    {
      "name": "Sleeping",
      "icon": "local_hotel"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
