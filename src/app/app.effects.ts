import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  SrlWidgetXapiService,
  ObjectIds,
  ItemTypes
} from "./services/srl-widget-xapi.service";
import {
  PlanningWidgetActionTypes,
  SelectedDayChangeAction,
  SubmitStatementAction,
  SubmitStatementSuccessAction,
  SubmitStatementErrorAction,
  SelectedWeekChangeAction,
  RequestDataFromBackendAction,
  RequestDataFromBackendSuccessAction,
  RequestDataFromBackendErrorAction
} from "./services/app.actions";
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
import { WeekService } from "./services/week.service";
import { Action } from "@ngrx/store";
import { ApiService } from "./services/api.service";

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions<Action>,
    private xapiService: SrlWidgetXapiService,
    private apiService: ApiService
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
          ObjectIds.Navigation,
          ItemTypes.NavigationDayChange,
          WeekService.toDictionaryKey(payload.selectedDay)
        );
        return this.xapiService.submitStatement(statement).pipe(
          map(res => new SubmitStatementSuccessAction()),
          catchError(error => of(new SubmitStatementErrorAction({ error })))
        );
      })
    );

  @Effect()
  public changeWeek = this.actions$
    .ofType<SelectedWeekChangeAction>(
      PlanningWidgetActionTypes.SELECTED_DAY_CHANGE
    )
    .pipe(
      map(action => action.payload),
      concatMap(payload => {
        const statement = this.xapiService.getNavigationStatement(
          ObjectIds.Navigation,
          ItemTypes.NavigationWeekChange,
          WeekService.toDictionaryKey(payload.selectedWeek)
        );
        return this.xapiService.submitStatement(statement).pipe(
          map(res => new SubmitStatementSuccessAction()),
          catchError(error => of(new SubmitStatementErrorAction({ error })))
        );
      })
    );

  @Effect()
  public requestBackendData = this.actions$
    .ofType<RequestDataFromBackendAction>(
      PlanningWidgetActionTypes.REQUEST_DATA_FROM_BACKEND
    )
    .pipe(
      concatMap(() => {
        return this.apiService.get("/widgets/srl-widget/").pipe(
          map(res => new RequestDataFromBackendSuccessAction({ res })),
          catchError(error =>
            of(new RequestDataFromBackendErrorAction({ error }))
          )
        );
      })
    );
}
