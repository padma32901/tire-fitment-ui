import { createSelector } from "@ngrx/store";
import { FitmentState } from "../reducers";

const getSelectedData = (state: any): any => state;

export const allYears = createSelector(
  getSelectedData,
  (state: any) => {
    return state.fitment.vehicle.years;
  }
);

export const make = createSelector(
  getSelectedData,
  (state: any) => {
    return state.fitment.vehicle.make;
  }
);