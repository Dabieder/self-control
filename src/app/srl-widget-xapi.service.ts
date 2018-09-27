import { Injectable } from "@angular/core";
import { HttpClient } from "selenium-webdriver/http";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root"
})
export class SrlWidgetXapiService {
  constructor(private api: ApiService) {}

  submitStatement(statement: any): Observable<any> {
    return this.api.post("/lad-backend/courses/1/", statement);
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
        account: {
          name: "Dabieder"
        },
        verb: {
          id: "http://id.tincanapi.com/verb/viewed",
          display: {
            en: "viewed"
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
        }
      }
    };
  }
}
