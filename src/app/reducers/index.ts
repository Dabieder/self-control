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
  SelectedDayChangeAction
} from "../app.actions";
import { WeeklyPlan, WeeklyPlans } from "../models/weekly-plan";
import { WeekService } from "../week.service";

export interface State {
  srlWidget: PlanningWidgetState;
}

export interface PlanningWidgetState {
  selectedWeek: Date;
  selectedDay: Date;
  weeklyPlans: WeeklyPlans;
}

const todayDate = new Date(Date.now());
const initialState: PlanningWidgetState = {
  selectedWeek: WeekService.getWeekForDay(todayDate),
  selectedDay: todayDate,
  weeklyPlans: {}
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
    default:
      return state;
  }
}

export const selectedWeek = (state: PlanningWidgetState) => state.selectedWeek;

export const getWidgetState = (state: State) => state.srlWidget;

export const getWeeklyPlans = createSelector(
  getWidgetState,
  widgetState => widgetState.weeklyPlans
);

export const getSelectedWeek = createSelector(getWidgetState, selectedWeek);

export const getSelectedDay = createSelector(getWidgetState, state => {
  return state.selectedDay;
});

export const getSelectedWeekday = createSelector(getWidgetState, state => {
  return state.selectedDay.getDay();
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
    console.log("Selected day: ", state.selectedDay);
    return weeklyPlan.dailyPlans[WeekService.dayToIndex(state.selectedDay)];
  }
);
