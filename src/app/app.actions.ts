import { Action } from "@ngrx/store";
import { WeeklyPlan, WeeklyPlans } from "./models/weekly-plan";

export enum PlanningWidgetActionTypes {
  SUBMIT_WEEKLY_PLAN = "[planningWidget] Submit Weekly Plan",
  SUBMIT_WEEKLY_PLAN_SUCCESS = "[planningWidget] Submit Weekly Plan Success",
  SUBMIT_WEEKLY_PLAN_FAILURE = "[planningWidget] Submit Weekly Plan Failure",
  SELECTED_WEEK_CHANGE = "[planningWidget] Selected Week Change",
  SELECTED_WEEKLY_PLAN_CHANGE = "[planningWidget] Selected Weekly Plan Change",
  WEEKLY_PLANS_UPDATED = "[planningWidget] Weekly Plans Updated",
  SELECTED_DAY_CHANGE = "[planningWidget] Selected Day Change",
}

export class SubmitWeeklyPlanAction implements Action {
  public readonly type = PlanningWidgetActionTypes.SUBMIT_WEEKLY_PLAN;

  constructor(public payload: { weeklyPlan: WeeklyPlan }) {}
}

export class SelectedWeekChangeAction implements Action {
  public readonly type = PlanningWidgetActionTypes.SELECTED_WEEK_CHANGE;

  constructor(public payload: { selectedWeek: Date }) {}
}

export class SelectedDayChangeAction implements Action {
  public readonly type = PlanningWidgetActionTypes.SELECTED_DAY_CHANGE;

  constructor(public payload: { selectedDay: Date }) {}
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
  | SelectedDayChangeAction
  | SelectedWeekChangeAction
  | SelectedWeeklyPlanChangeAction
  | WeeklyPlansUpdatedAction;
