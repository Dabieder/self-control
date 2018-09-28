import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { SrlWidgetXapiService } from "./srl-widget-xapi.service";
import {
  PlanningWidgetActionTypes,
  SelectedDayChangeAction,
  SubmitStatementAction,
  SubmitStatementSuccessAction,
  SubmitStatementErrorAction
} from "./app.actions";
import {
  catchError,
  map,
  tap,
  distinctUntilChanged,
  debounceTime,
  switchMap,
  concatMap
} from "rxjs/operators";
import { Observable, of } from "rxjs";
import { WeekService } from "./week.service";
import { Action } from "@ngrx/store";

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions<Action>,
    private xapiService: SrlWidgetXapiService
  ) {}

  @Effect()
  public changeDay = this.actions$
    .ofType<SelectedDayChangeAction>(
      PlanningWidgetActionTypes.SELECTED_DAY_CHANGE
    )
    .pipe(
      map(action => action.payload),
      concatMap(payload => {
        const statement = this.xapiService.getNavigationStatement(
          "123",
          "Day Change",
          WeekService.toDictionaryKey(payload.selectedDay)
        );
        return this.xapiService.submitStatement(statement).pipe(
          map(res => new SubmitStatementSuccessAction()),
          catchError(error => of(new SubmitStatementErrorAction({ error })))
        );
      })
    );

}
