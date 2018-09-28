import { Component, OnInit, Input } from "@angular/core";
import { WeeklyPlans } from "../models/weekly-plan";

@Component({
  selector: "app-learning-goal-chart",
  templateUrl: "./learning-goal-chart.component.html",
  styleUrls: ["./learning-goal-chart.component.scss"]
})
export class LearningGoalChartComponent implements OnInit {
  @Input()
  weeklyPlans: WeeklyPlans;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      position: "bottom"
    }
  };
  public barChartLabels: string[] = [
    "24.09. - 30.09.",
    "01.10. - 07.10.",
    "08.10. - 14.10.",
    "15.10. - 21.10."
  ];
  public barChartType = "bar";
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81], label: "Set Goals" },
    { data: [28, 48, 40, 19], label: "Result" }
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public fillFromWeeklyPlans(numWeeks: number) {}

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40
    ];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  ngOnInit() {}
}
