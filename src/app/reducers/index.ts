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
  PlanningWidgetActionTypes
} from "../app.actions";

export interface State {
  planning: PlanningState;
}

export interface PlanningState {
  selectedWeek: Date;
}

const initialState: PlanningState = {
  selectedWeek: new Date()
};

export const reducers: ActionReducerMap<State> = {
  planning: planningReducer
};

export const metaReducers: MetaReducer<
  PlanningState
>[] = !environment.production ? [] : [];

export function planningReducer(
  state: any = initialState,
  action: PlanningWidgetActionsUnion
): PlanningState {
  switch (action.type) {
    case PlanningWidgetActionTypes.SELECTED_WEEK_CHANGE:
      return Object.assign({}, state, {
        selectedWeek: action.payload
      });
    default:
      return state;
  }
}
