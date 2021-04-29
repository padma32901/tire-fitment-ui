import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";

import { Action } from "@ngrx/store";
import * as vehicleActions from "../actions/vehicle.action";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { FitmentService } from "../../services/fitment.service";

@Injectable()
export class VehicleEffects {
  constructor(
    private actions$: Actions,
    private fitmentService: FitmentService
  ) {}

  @Effect()
  getYears$: Observable<any> = this.actions$.pipe(
    ofType(vehicleActions.LOAD_YEARS),
    switchMap(() => {
      return this.fitmentService.getYears().pipe(
        map((data: any) => {
          return new vehicleActions.LoadYearsSuccess(data);
        }),
        catchError(error => of(new vehicleActions.LoadYearsFail(error)))
      );
    })
  );
}
