import { createSelector } from "@ngrx/store";

const getSelectedYears = (state: any): any => state.fitment.vehicle;
const getSelectedMakes = (state: any): any => state.fitment.vehicle;
const getSelectedModels = (state: any): any => state.fitment.vehicle;
const getSelectedTrim = (state: any): any => state.fitment.vehicle;

export const allYears = createSelector(
  getSelectedYears,
  (state: any) => {
    return state.years;
  }
);

export const make = createSelector(
  getSelectedMakes,
  (state: any) => {
    return state.make;
  }
);

export const model = createSelector(
  getSelectedModels,
  (state: any) => {
    return state.model;
  }
);

export const trim = createSelector(
  getSelectedTrim,
  (state: any) => {
    return state.trim;
  }
);
