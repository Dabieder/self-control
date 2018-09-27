import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { SrlWidgetXapiService } from "./srl-widget-xapi.service";
import {
  PlanningWidgetActionTypes,
  SelectedDayChangeAction,
  SubmitStatementAction
} from "./app.actions";
import {
  catchError,
  map,
  tap,
  switchMap,
  distinctUntilChanged,
  debounceTime
} from "rxjs/operators";
import { Observable } from "rxjs";
import { WeekService } from "./week.service";

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private xapiService: SrlWidgetXapiService
  ) {}

  // @Effect()
  // public changeDay: Observable<Action> = this.actions$.pipe(
  //   ofType(PlanningWidgetActionTypes.SELECTED_DAY_CHANGE),
  //   distinctUntilChanged(),
  //   debounceTime(500),
  //   switchMap(payload => {
  //     const statement = this.xapiService.getNavigationStatement(
  //       "123",
  //       "Day Change",
  //       "statement"
  //     );
  //     return new SubmitStatementAction({ statement: statement });

  //     // this.xapiService
  //     //   .submitStatement(statement)
  //     //   .pipe(
  //     //     map(res => new )
  //     //   )
  //   })
  // );
}
