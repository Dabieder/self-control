import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { WeeklyPlans } from "../models/weekly-plan";
import { Chart } from 'chart.js';

@Component({
  selector: "app-learning-goal-chart",
  templateUrl: "./learning-goal-chart.component.html",
  styleUrls: ["./learning-goal-chart.component.scss"]
})
export class LearningGoalChartComponent implements OnInit, AfterViewInit {

  @Input()
  weeklyPlans: WeeklyPlans;

  chart = [];

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
    "15.10. - 21.10.",
    "22.10. - 28.10.",
    "29.10. - 03.11."
  ];
  public barChartType = "bar";
  public barChartLegend = false;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 100, 73], label: "Set Goals" },
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public fillFromWeeklyPlans(numWeeks: number) { }

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

  canvas: any;
  ctx: any;

  ngAfterViewInit(): void {

    // this.canvas = document.getElementById('canvas');
    // this.ctx = this.canvas.getContext('2d');
    // let myChart = new Chart(this.ctx, {
    //   type: 'pie',
    //   data: {
    //     labels: ["New", "In Progress", "On Hold"],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: [1, 2, 3],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)'
    //       ],
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     responsive: false
    //   }
    // });

  }

  ngOnInit() {

  }
}
