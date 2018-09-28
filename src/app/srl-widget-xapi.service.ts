import { Injectable } from "@angular/core";
import { HttpClient } from "selenium-webdriver/http";
import { Observable, of } from "rxjs";
import { ApiService } from "./api.service";

export const ObjectIds = {
  Navigation: "Navigation"
};

export const ItemTypes = {
  NavigationDayChange: "Day Change Navigation",
  NavigationWeekChange: "Week Change Navigation"
};

@Injectable({
  providedIn: "root"
})
export class SrlWidgetXapiService {
  constructor(private api: ApiService) {}

  submitStatement(statement: any): Observable<any> {
    // return of(true);
    console.log("Submitting xAPI statement: ", statement);
    return this.api.post("", statement);
  }

  getNavigationStatement(
    objectId: string,
    itemType: string,
    objectName: string
  ) {
    const timestamp = Date.now();
    return {
      version: "1.0.0",
      timestamp: timestamp,
      actor: {
        objectType: "Agent",
        account: { name: "Dabieder" }
      },
      verb: {
        id: "http://id.tincanapi.com/verb/viewed",
        display: {
          en: "viewed"
        }
      },
      object: {
        objectType: "Activity",
        id: objectId,
        definition: {
          type: itemType,
          name: {
            en: objectName
          }
        }
      }
    };
  }
}
