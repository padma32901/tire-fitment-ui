import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FitmentState } from "../reducers";

const getCurrentState = createFeatureSelector<FitmentState>("years");

export const allYears = createSelector(
  getCurrentState,
  (state: FitmentState) => {
    return state;
  }
);
