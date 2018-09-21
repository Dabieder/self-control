import { Action } from "@ngrx/store";
import { WeeklyPlan, WeeklyPlans } from "./models/weekly-plan";

const prefix = "[planningWidget] ";

export const PlanningWidgetActionTypes = {
  SUBMIT_WEEKLY_PLAN: prefix + "Submit Weekly Plan",
  SELECTED_WEEK_CHANGE: prefix + " Selected Week Change",
  SELECTED_WEEKLY_PLAN_CHANGE: prefix + " Selected Weekly Plan Change",
  WEEKLY_PLANS_UPDATED: prefix + " Weekly Plans Updated"
};

export class SubmitWeeklyPlanAction implements Action {
  public readonly type = PlanningWidgetActionTypes.SUBMIT_WEEKLY_PLAN;

  constructor(public payload: { weeklyPlan: WeeklyPlan }) {}
}

export class SelectedWeekChangeAction implements Action {
  public readonly type = PlanningWidgetActionTypes.SELECTED_WEEK_CHANGE;

  constructor(public payload: { selectedWeek: Date }) {}
}

export class SelectedWeeklyPlanChangeAction implements Action {
  public readonly type = PlanningWidgetActionTypes.SELECTED_WEEKLY_PLAN_CHANGE;

  constructor(public payload: { selectedWeeklyPlan: WeeklyPlan }) {}
}

export class WeeklyPlansUpdatedAction implements Action {
  public readonly type = PlanningWidgetActionTypes.WEEKLY_PLANS_UPDATED;

  constructor(public payload: { weeklyPlans: WeeklyPlans }) {}
}

export type PlanningWidgetActionsUnion =
  | SubmitWeeklyPlanAction
  | SelectedWeekChangeAction
  | SelectedWeeklyPlanChangeAction
  | WeeklyPlansUpdatedAction;
