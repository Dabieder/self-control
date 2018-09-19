import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";

export interface PlanningState {}

export const reducers: ActionReducerMap<PlanningState> = {};

export const metaReducers: MetaReducer<
  PlanningState
>[] = !environment.production ? [] : [];
