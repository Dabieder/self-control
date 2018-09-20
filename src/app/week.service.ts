import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class WeekService {
  dateFormatOptions: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    year: "2-digit",
    month: "2-digit"
  };
  locale = "de-DE";

  constructor() {}

  /**
   *
   * @param day The day for which to return the previous monday for
   * @return The monday that starts the week for this day
   */
  getWeekForDay(day: Date): Date {
    const daysToSubtract = day.getDay() - 1;
    const startDate = new Date(day.setDate(day.getDate() - daysToSubtract));
    startDate.setHours(0, 0, 0, 0);
    return startDate;
  }

  previousWeekDate(week: Date) {
    return new Date(week.setDate(week.getDate() - 7));
  }

  nextWeekDate(week: Date) {
    return new Date(week.setDate(week.getDate() + 7));
  }

  toDisplay(week: Date) {
    const startDay = week.toLocaleDateString(
      this.locale,
      this.dateFormatOptions
    );
    const endDate = new Date();
    endDate.setDate(week.getDate() + 7);
    const endDay = endDate.toLocaleDateString(
      this.locale,
      this.dateFormatOptions
    );
    return startDay + " - " + endDay;
  }
}
