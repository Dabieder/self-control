import { Action } from "@ngrx/store";
import { WeeklyPlan } from "./models/weekly-plan";

export const PlanActionTypes = {
  SUBMIT_WEEKLY_PLAN: "[plan] Submit Weekly Plan"
};

export class SubmitWeeklyPlanAction implements Action {
  readonly type = PlanActionTypes.SUBMIT_WEEKLY_PLAN;

  constructor(payload: WeeklyPlan) {}
}

export type PlanningActionsUnion = SubmitWeeklyPlanAction;
