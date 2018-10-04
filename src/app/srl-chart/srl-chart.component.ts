import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import { WeeklyPlans } from "../models/weekly-plan";
import { Chart } from "chart.js";

@Component({
  selector: "app-srl-chart",
  templateUrl: "./srl-chart.component.html",
  styleUrls: ["./srl-chart.component.scss"]
})
export class SrlChartComponent implements OnInit, AfterViewInit {
  weeklyPlans: WeeklyPlans;
  @ViewChild("chartCanvas")
  chartRef;
  chart: any;
  // Radar
  public radarChartLabels: string[] = [
    "Goal Setting",
    "Time Management",
    "Help Seeking",
    "Task Strategies",
    "Self-Evaluation"
  ];

  public radarChartData: any = [
    { data: [4, 2.5, 4, 3.3, 2], label: "Questionnaire", borderColor: "rgba(255, 153, 0, 0.8)" },
    { data: [3, 0.3, 4, 3.6, 3.2], label: "Inferred", borderColor: "rgba(102, 153, 204, 0.8)" }
  ];
  public radarChartType = "radar";

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    Chart.defaults.global.legend.display = false;
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: "radar",
      data: {
        labels: this.radarChartLabels,
        datasets: this.radarChartData
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
      }
    });
  }
}
