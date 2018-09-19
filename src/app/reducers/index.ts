import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";

export interface PlanningState {
  selectedWeek: Date;
}

const initialState: PlanningState = {
  selectedWeek: new Date()
};

// export const reducers: ActionReducerMap<PlanningState> = {};

export const metaReducers: MetaReducer<
  PlanningState
>[] = !environment.production ? [] : [];

// export function reducer(sate: any = initialState, action: Planni)