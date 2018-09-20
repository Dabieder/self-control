import { Component, OnInit } from "@angular/core";
import { WeekService } from "../week.service";

@Component({
  selector: "app-week-selection",
  templateUrl: "./week-selection.component.html",
  styleUrls: ["./week-selection.component.scss"]
})
export class WeekSelectionComponent implements OnInit {
  weeks: Date[];
  selectedWeekDisplay = "01.11.18 - 07.11.18";
  selectedWeek: Date;

  constructor(private weekService: WeekService) {}

  ngOnInit() {
    this.weeks = [
      new Date(2018, 9, 17, 0, 0, 0),
      new Date(2018, 9, 24, 0, 0, 0),
      new Date(2018, 10, 1, 0, 0, 0),
      new Date(2018, 10, 8, 0, 0, 0),
      new Date(2018, 10, 15, 0, 0, 0),
      new Date(2018, 10, 22, 0, 0, 0),
      new Date(2018, 10, 29, 0, 0, 0),
      new Date(2018, 11, 5, 0, 0, 0),
      new Date(2018, 11, 12, 0, 0, 0),
      new Date(2018, 11, 19, 0, 0, 0),
      new Date(2018, 11, 26, 0, 0, 0),
      new Date(2018, 12, 3, 0, 0, 0),
      new Date(2018, 12, 10, 0, 0, 0),
      new Date(2018, 12, 17, 0, 0, 0),
      new Date(2018, 12, 24, 0, 0, 0),
      new Date(2018, 12, 31, 0, 0, 0),
      new Date(2019, 1, 7, 0, 0, 0),
      new Date(2019, 1, 14, 0, 0, 0),
      new Date(2019, 1, 21, 0, 0, 0),
      new Date(2019, 1, 28, 0, 0, 0)
    ];

    this.selectedWeek = this.weekService.getWeekForDay(new Date());
    this.selectedWeekDisplay = this.weekService.toDisplay(this.selectedWeek);
  }

  selectNextWeek() {
    this.selectedWeek = this.weekService.nextWeekDate(this.selectedWeek);
    this.selectedWeekDisplay = this.weekService.toDisplay(this.selectedWeek);
  }

  selectPreviousWeek() {
    this.selectedWeek = this.weekService.previousWeekDate(this.selectedWeek);
    this.selectedWeekDisplay = this.weekService.toDisplay(this.selectedWeek);
  }
}
