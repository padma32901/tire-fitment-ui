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
    switchMap(action => {
      return this.fitmentService.getData("years").pipe(
        map((data: any) => {
          return new vehicleActions.LoadYearsSuccess(data);
        }),
        catchError(error => of(new vehicleActions.LoadYearsFail(error)))
      );
    })
  );

  @Effect()
  getMakes$: Observable<any> = this.actions$.pipe(
    ofType(vehicleActions.LOAD_MAKES),
    switchMap(action => {
      return this.fitmentService.getData("makes").pipe(
        map((data: any) => {
          return new vehicleActions.LoadMakesSuccess(data);
        }),
        catchError(error => of(new vehicleActions.LoadMakesFail(error)))
      );
    })
  );

  @Effect()
  getModels$: Observable<any> = this.actions$.pipe(
    ofType(vehicleActions.LOAD_MODELS),
    switchMap(() => {
      return this.fitmentService.getData().pipe(
        map((data: any) => {
          return new vehicleActions.LoadModelsSuccess(data);
        }),
        catchError(error => of(new vehicleActions.LoadModelsFail(error)))
      );
    })
  );

  @Effect()
  getTrim$: Observable<any> = this.actions$.pipe(
    ofType(vehicleActions.LOAD_TRIM),
    switchMap(() => {
      return this.fitmentService.getData().pipe(
        map((data: any) => {
          return new vehicleActions.LoadTrimSuccess(data);
        }),
        catchError(error => of(new vehicleActions.LoadTrimFail(error)))
      );
    })
  );
}
