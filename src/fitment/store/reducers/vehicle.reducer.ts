// HOW TO SET UP A reducer.ts FILE:
// Import actions and interfaces
// Create interface for initial state
// Create initial state
// Create reducer function and pass in initial state and actions.
// Return new state

import * as fromVehicle from "../actions";

export interface VehicleState {
  years: string[];
  make: string[];
  model: string[];
  trim: string[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: VehicleState = {
  years: [],
  make: [],
  model: [],
  trim: [],
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
      return {
        ...state,
        years: action.payload.year,
        loaded: true,
        loading: false
      };
    }

    case fromVehicle.LOAD_MAKES: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }
    case fromVehicle.LOAD_MAKES_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }
    case fromVehicle.LOAD_MAKES_SUCCESS: {
      return {
        ...state,
        make: action.payload.make,
        loaded: false,
        loading: true
      };
    }

    case fromVehicle.LOAD_MODELS: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }
    case fromVehicle.LOAD_MODELS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }
    case fromVehicle.LOAD_MODELS_SUCCESS: {
      return {
        ...state,
        model: action.payload.model,
        loaded: false,
        loading: true
      };
    }

    case fromVehicle.LOAD_TRIM: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }
    case fromVehicle.LOAD_TRIM_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }
    case fromVehicle.LOAD_TRIM_SUCCESS: {
      return {
        ...state,
        trim: action.payload.trim,
        loaded: false,
        loading: true
      };
    }
  }

  return state;
}
