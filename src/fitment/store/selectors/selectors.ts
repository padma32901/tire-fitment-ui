import { createSelector } from "@ngrx/store";
import { FitmentState } from "../reducers";
const getSelectedData = (state: any): any => state;

export const allYears = createSelector(
  getSelectedData,
  (state: any) => {
    console.log("test");
    console.log(state);
    return state.fitment.vehicle.years;
  }
);
