import { Action } from "@ngrx/store";
import { WeeklyPlan } from "./models/weekly-plan";

const prefix = "[planningWidget] ";

export const PlanningWidgetActionTypes = {
  SUBMIT_WEEKLY_PLAN: prefix + "Submit Weekly Plan",
  SELECTED_WEEK_CHANGE: prefix + "Week Change"
};

export class SubmitWeeklyPlanAction implements Action {
  public readonly type = PlanningWidgetActionTypes.SUBMIT_WEEKLY_PLAN;

  constructor(public payload?: { weeklyPlan: WeeklyPlan }) {}
}

export class SelectedWeekChangeAction implements Action {
  public readonly type = PlanningWidgetActionTypes.SELECTED_WEEK_CHANGE;

  constructor(public payload?: { selectedWeek: Date }) {}
}

export type PlanningWidgetActionsUnion =
  | SubmitWeeklyPlanAction
  | SelectedWeekChangeAction;
