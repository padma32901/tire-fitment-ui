import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import * as vehicleActions from "../actions/vehicle.action";
import { catchError, map, switchMap } from "rxjs/operators";
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
      return this.fitmentService.getData("years", action).pipe(
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
      return this.fitmentService.getData("makes", action).pipe(
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
    switchMap(action => {
      return this.fitmentService.getData("models", action).pipe(
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
    switchMap(action => {
      return this.fitmentService.getData("trim", action).pipe(
        map((data: any) => {
          return new vehicleActions.LoadTrimSuccess(data);
        }),
        catchError(error => of(new vehicleActions.LoadTrimFail(error)))
      );
    })
  );
}
