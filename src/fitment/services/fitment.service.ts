import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class FitmentService {
  baseUrl = "https://6080be3273292b0017cdbf2a.mockapi.io/";

  constructor(private http: HttpClient) {}

  // const headers = new HttpHeaders({ "Content-Type": "application/json" });
  // const options = { headers };
  // Not added any authentication token Since there is no authenication needed

  getData(type: string = "years", data: any = {}) {
    const url = this.baseUrl + type;
    // we can add request data in query or path param as needed
    return this.http.get(url).pipe(
      map((response: any) => response),
      catchError(err => {
        console.log(err);
        return of([]);
      })
    );
  }

  // Make with year (2021)
  // https://6080be3273292b0017cdbf2a.mockapi.io/makes

  // Model with year and make (Acura)
  // https://6080be3273292b0017cdbf2a.mockapi.io/models

  // Trim with year, make, model (RDX)
  // https://6080be3273292b0017cdbf2a.mockapi.io/trim
}
