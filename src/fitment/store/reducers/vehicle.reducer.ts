// HOW TO SET UP A reducer.ts FILE:
// Import actions and interfaces
// Create interface for initial state
// Create initial state
// Create reducer function and pass in initial state and actions.
// Return new state

import * as fromVehicle from "../actions/vehicle.action";

export interface VehicleState {
  years: string[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: VehicleState = {
  years: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromVehicle.VehicleAction
): VehicleState {
  switch (action.type) {
    case fromVehicle.LOAD_YEARS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromVehicle.LOAD_YEARS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case fromVehicle.LOAD_YEARS_SUCCESS: {
      // console.log("current state:");
      // console.log(state);
      // console.log(action.payload);
      return {
        ...state,
        years: action.payload.year,
        loaded: true,
        loading: false
      };
    }
  }

  return state;
}
