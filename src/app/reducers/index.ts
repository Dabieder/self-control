import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import { PlanningActionsUnion } from "../app.actions";

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
  sate: any = initialState,
  action: PlanningActionsUnion
): PlanningState {
  return initialState;
}
