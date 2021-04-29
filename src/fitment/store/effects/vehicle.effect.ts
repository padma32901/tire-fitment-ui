import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";

import { Action } from "@ngrx/store";
import * as vehicleActions from "../actions/vehicle.action";
import { catchError, map, mergeMap } from "rxjs/operators";
import { FitmentService } from "../../services/fitment.service";

@Injectable()
export class VehicleEffects {
  constructor(
    private actions$: Actions,
    private fitmentService: FitmentService
  ) {}

  @Effect()
  getYears$: Observable<Action> = this.actions$.pipe(
    ofType(vehicleActions.LOAD_YEARS),
    mergeMap(() =>
      this.fitmentService.getYears().pipe(
        map((years: any) => {
          return new vehicleActions.LoadYearsSuccess(years);
        }),
        catchError(error => of(new vehicleActions.LoadYearsFail(error)))
      )
    )
  );
}
