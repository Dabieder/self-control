import { Component, OnInit, Input } from "@angular/core";
import { TrackingItem } from "../models/tracking-item";

@Component({
  selector: "app-tracking-item",
  templateUrl: "./tracking-item.component.html",
  styleUrls: ["./tracking-item.component.css"]
})
export class TrackingItemComponent implements OnInit {
  @Input() trackingItem: TrackingItem;

  constructor() {}

  ngOnInit() {}

  trackingItemClick(event: any) {
    console.log("This, ", this);
    this.trackingItem.selected = !this.trackingItem.selected;
  }
}
