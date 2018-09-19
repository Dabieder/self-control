import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-srl-chart",
  templateUrl: "./srl-chart.component.html",
  styleUrls: ["./srl-chart.component.scss"]
})
export class SrlChartComponent implements OnInit {
  // Radar
  public radarChartLabels: string[] = [
    "Goal Setting",
    "Time Management",
    "Help Seeking",
    "Task Strategies",
    "Self-Evaluation"
  ];

  public radarChartData: any = [
    { data: [65, 59, 90, 81, 56], label: "Questionnaire" },
    { data: [28, 48, 40, 19, 69], label: "Inferred" }
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
}
