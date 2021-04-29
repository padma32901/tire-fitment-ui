import { createSelector } from "@ngrx/store";
import { FitmentState } from "../reducers";

const getSelectedYears = (state: any): any => state;
const getSelectedMakes = (state: any): any => state;

export const allYears = createSelector(
  getSelectedYears,
  (state: any) => {
    return state.fitment.vehicle.years;
  }
);

export const make = createSelector(
  getSelectedMakes,
  (state: any) => {
    return state.fitment.vehicle.make;
  }
);
