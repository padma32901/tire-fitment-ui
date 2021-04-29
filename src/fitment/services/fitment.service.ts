import { Injectable } from "@angular/core";
import { Subject, Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { FitmentState } from "../store";
import { VehicleState } from "../store/reducers/vehicle.reducer";

@Injectable({
  providedIn: "root"
})
export class FitmentService {
  yearUrl = "https://6080be3273292b0017cdbf2a.mockapi.io/years";

  constructor(private http: HttpClient) {}

  getYears() {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    const options = { headers };
    // Not added any authentication token Since there is no authenication needed
    return this.http.get(this.yearUrl, options).pipe(
      map((response: any) => response),
      catchError(err => {
        console.log(err);
        return of([]);
      })
    );
  }
}
