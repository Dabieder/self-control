import { Component, OnInit } from "@angular/core";
import { WeekService } from "../week.service";

@Component({
  selector: "app-week-selection",
  templateUrl: "./week-selection.component.html",
  styleUrls: ["./week-selection.component.scss"]
})
export class WeekSelectionComponent implements OnInit {
  selectedWeekDisplay = "01.11.18 - 07.11.18";
  selectedWeek: Date;

  constructor(private weekService: WeekService) {}

  ngOnInit() {
    this.selectCurrentWeek();
  }

  selectNextWeek() {
    this.selectedWeek = this.weekService.nextWeekDate(this.selectedWeek);
    this.selectedWeekDisplay = this.weekService.toDisplay(this.selectedWeek);
  }

  selectPreviousWeek() {
    this.selectedWeek = this.weekService.previousWeekDate(this.selectedWeek);
    this.selectedWeekDisplay = this.weekService.toDisplay(this.selectedWeek);
  }

  selectCurrentWeek() {
    this.selectedWeek = this.weekService.getWeekForDay(new Date());
    this.selectedWeekDisplay = this.weekService.toDisplay(this.selectedWeek);
  }
}
