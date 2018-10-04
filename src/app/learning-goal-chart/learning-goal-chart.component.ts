import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild
} from "@angular/core";
import { WeeklyPlans } from "../models/weekly-plan";
import { Chart } from "chart.js";

@Component({
  selector: "app-learning-goal-chart",
  templateUrl: "./learning-goal-chart.component.html",
  styleUrls: ["./learning-goal-chart.component.scss"]
})
export class LearningGoalChartComponent implements OnInit, AfterViewInit {
  @Input()
  weeklyPlans: WeeklyPlans;

  @ViewChild("chartCanvas")
  chartRef;
  chart: any;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      position: "bottom"
    }
  };
  public barChartLabels: string[] = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  public barChartType = "bar";
  public barChartLegend = false;

  public barChartData = [65, 59, 80, 81, 100, 73, 0, 0, 0, 0];

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

  ngAfterViewInit(): void {
    // this.canvas = document.getElementById("canvas");
    // this.ctx = this.canvas.getContext("2d");
    const bgColors = this.getBackgroundColorsForValues(this.barChartData);
    Chart.defaults.global.legend.display = false;
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: "bar",
      data: {
        labels: this.barChartLabels,
        datasets: [
          {
            data:  this.barChartData,
            backgroundColor: bgColors,
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false
      }
    });
  }

  getBackgroundColorsForValues(values: number[]){
    const colors = [];
    for (const val of values){
      colors.push(this.getColorBasedOnSuccess(val));
    }
    return colors;
  }

  getColorBasedOnSuccess(val: number) {
    const percentage = Math.max(0.5, val / 100);

    const red = 255 - (percentage * 255);
    const green = 153;
    const blue = (percentage * 255);

    return "rgba(" + red + ", " + green + ", " + blue + ", 1)";
  }

  ngOnInit() {}
}
