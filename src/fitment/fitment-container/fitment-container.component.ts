import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as fromStore from "../store";

@Component({
  selector: "app-fitment-container",
  templateUrl: "./fitment-container.component.html",
  styleUrls: ["./fitment-container.component.css"]
})
export class FitmentContainerComponent implements OnInit {
  data$: Observable<any>;
  breadCrumbes: string[];
  selectedType: string = "years";

  // import the store into the constructor
  constructor(private _store: Store<fromStore.FitmentState>) {}

  ngOnInit() {}

  getYears() {
    this._store.dispatch(new fromStore.LoadYears());
    this.data$ = this._store.pipe(select(fromStore.allYears));
  }

  OnItemClick(type: string, value: string) {
    this.selectedType = type;
    switch (type) {
      case "makes":
        this._store.dispatch(new fromStore.LoadMakes());
        this.data$ = this._store.pipe(select(fromStore.make));
        //this.selectedType = "models";
        break;
      case "models":
        this._store.dispatch(new fromStore.LoadModels());
        this.data$ = this._store.pipe(select(fromStore.model));
        //this.selectedType = "trim";
        break;
      case "trim":
        this._store.dispatch(new fromStore.LoadTrim());
        this.data$ = this._store.pipe(select(fromStore.trim));
        break;
    }
  }

  // Make with year (2021)
  // https://6080be3273292b0017cdbf2a.mockapi.io/makes

  // Model with year and make (Acura)
  // https://6080be3273292b0017cdbf2a.mockapi.io/models

  // Trim with year, make, model (RDX)
  // https://6080be3273292b0017cdbf2a.mockapi.io/trim
}
