import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import {
  PlanningWidgetActionsUnion,
  PlanningWidgetActionTypes,
  SelectedWeekChangeAction,
  WeeklyPlansUpdatedAction,
  SelectedDayChangeAction,
  SubmitStatementErrorAction
} from "../services/app.actions";
import { WeeklyPlan, WeeklyPlans } from "../models/weekly-plan";
import { WeekService } from "../services/week.service";

export interface State {
  srlWidget: PlanningWidgetState;
}

export interface PlanningWidgetState {
  selectedWeek: Date;
  selectedDay: Date;
  weeklyPlans: WeeklyPlans;
  error: any;
}

const todayDate = new Date(Date.now());
const initialState: PlanningWidgetState = {
  selectedWeek: WeekService.getWeekForDay(todayDate),
  selectedDay: todayDate,
  weeklyPlans: {},
  error: null,
};

export const reducers: ActionReducerMap<State> = {
  srlWidget: planningReducer
};

export const metaReducers: MetaReducer<
  PlanningWidgetState
>[] = !environment.production ? [] : [];

export function planningReducer(
  state: PlanningWidgetState = initialState,
  action: PlanningWidgetActionsUnion
): PlanningWidgetState {
  switch (action.type) {
    case PlanningWidgetActionTypes.SELECTED_WEEK_CHANGE:
      return {
        ...state,
        selectedWeek: (<SelectedWeekChangeAction>action).payload.selectedWeek
      };
    case PlanningWidgetActionTypes.WEEKLY_PLANS_UPDATED:
      return {
        ...state,
        weeklyPlans: (<WeeklyPlansUpdatedAction>action).payload.weeklyPlans
      };
    case PlanningWidgetActionTypes.SELECTED_DAY_CHANGE:
      return {
        ...state,
        selectedDay: (<SelectedDayChangeAction>action).payload.selectedDay
      };
    case PlanningWidgetActionTypes.SUBMIT_STATEMENT_ERROR:
      return {
        ...state,
        error: (<SubmitStatementErrorAction>action).payload.error
      };
    default:
      return state;
  }
}

export const selectedWeek = (state: PlanningWidgetState) => state.selectedWeek;

export const getWidgetState = (state: State) => state;

export const getWeeklyPlans = createSelector(
  getWidgetState,
  widgetState => {
    return widgetState.srlWidget.weeklyPlans;
  }
);

export const getSelectedWeek = createSelector(getWidgetState, state => {
  return state.srlWidget.selectedWeek;
});

export const getSelectedDay = createSelector(getWidgetState, state => {
  return state.srlWidget.selectedDay;
});

export const getSelectedWeekday = createSelector(getWidgetState, state => {
  return state.srlWidget.selectedDay.getDay();
});

export const getCurrentWeeklyPlan = createSelector(
  getWidgetState,
  getWeeklyPlans,
  getSelectedWeek,
  (state, plans, date) => {
    const key = WeekService.toDictionaryKey(date);
    if (plans[key]) {
      return plans[key];
    }
    return null;
  }
);

export const getCurrentDailyPlan = createSelector(
  getWidgetState,
  getCurrentWeeklyPlan,
  (state, weeklyPlan) => {
    if (weeklyPlan) {
      return weeklyPlan.dailyPlans[WeekService.dayToIndex(state.srlWidget.selectedDay)];
    }
    return null;
  }
);
