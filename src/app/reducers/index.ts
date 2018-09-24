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
  WeeklyPlansUpdatedAction
} from "../app.actions";
import { WeeklyPlan, WeeklyPlans } from "../models/weekly-plan";
import { WeekService } from "../week.service";

export interface State {
  srlWidget: PlanningWidgetState;
}

export interface PlanningWidgetState {
  selectedWeek: Date;
  weeklyPlans: WeeklyPlans;
}

const initialState: PlanningWidgetState = {
  selectedWeek: new Date(Date.now()),
  weeklyPlans: {
    "2018-09-17": WeeklyPlan.createForWeek(new Date(Date.now()))
  }
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
      return Object.assign({}, state, {
        selectedWeek: (<SelectedWeekChangeAction>action).payload.selectedWeek
      });
    case PlanningWidgetActionTypes.WEEKLY_PLANS_UPDATED:
      return Object.assign({}, state, {
        weeklyPlans: (<WeeklyPlansUpdatedAction>action).payload.weeklyPlans
      });
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

export const getSelectedWeek = createSelector(
  getWidgetState,
  selectedWeek
);

export const getCurrentWeeklyPlan = createSelector(
  getWidgetState,
  getWeeklyPlans,
  getSelectedWeek,
  (state, plans, date) => {
    console.log("Getting current weekly plan for date: ", date);
    const key = WeekService.toDictionaryKey(date);
    if (plans[key]) {
      return plans[key];
    }
    console.log("do not got here");
    return null;
  }
);
