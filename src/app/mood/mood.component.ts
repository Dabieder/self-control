import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.scss']
})
export class MoodComponent implements OnInit {
  public moods: any;

  constructor() {}

  ngOnInit() {
    this.moods = [
      {
        name: "Great",
        icon: "sentiment_very_satisfied",
        selected: false
      },
      {
        name: "Good",
        icon: "sentiment_satisfied",
        selected: false
      },
      {
        name: "Okay",
        icon: "radio_button_unchecked",
        selected: false
      },
      {
        name: "Bad",
        icon: "sentiment_dissatisfied",
        selected: false
      },
      {
        name: "Horrible",
        icon: "sentiment_very_dissatisfied",
        selected: false
      }
    ];
  }

}
