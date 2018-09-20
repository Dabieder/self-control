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
  SelectedWeekChangeAction
} from "../app.actions";
import { WeeklyPlan } from "../models/weekly-plan";

export interface State {
  srlWidget: PlanningWidgetState;
}

export interface PlanningWidgetState {
  selectedWeek: WeeklyPlan;
  weeklyPlans: { [week: string]: WeeklyPlan };
  weeklyResults: { [week: string]: WeeklyPlan };
}

const initialState: PlanningWidgetState = {
  selectedWeek: WeeklyPlan.createDefault(),
  weeklyPlans: {
    "20180920": WeeklyPlan.createDefault()
  },
  weeklyResults: { "20180920": new WeeklyPlan() }
};

export const reducers: ActionReducerMap<State> = {
  srlWidget: planningReducer
};

export const metaReducers: MetaReducer<
  PlanningWidgetState
>[] = !environment.production ? [] : [];

export function planningReducer(
  state: any = initialState,
  action: PlanningWidgetActionsUnion
): PlanningWidgetState {
  switch (action.type) {
    case PlanningWidgetActionTypes.SELECTED_WEEK_CHANGE:
      return Object.assign({}, state, {
        selectedWeek: (<SelectedWeekChangeAction>action).payload.selectedWeek
      });
    default:
      return state;
  }
}

export const selectedWeek = (state: PlanningWidgetState) => state.selectedWeek;

export const getSelectedWeek = createSelector(
  (state: PlanningWidgetState) => state,
  selectedWeek
);
