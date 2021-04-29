import { Component, OnDestroy, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { FilterKeyPair } from "../interfaces/filter";

import * as fromStore from "../store";

@Component({
  selector: "app-fitment-container",
  templateUrl: "./fitment-container.component.html",
  styleUrls: ["./fitment-container.component.css"]
})
export class FitmentContainerComponent implements OnInit, OnDestroy {
  data$: Observable<any>;
  selectedType: string = "years";
  breadCrumbs: any[] = [];
  vehicle: string;
  showMessage: boolean = true;

  // import the store into the constructor
  constructor(private _store: Store<fromStore.FitmentState>) {}

  // This ngOnInit will be useful when you want to any stuff when component intialiaze. Since i didn't have requirement to do any thing here i just added without any implementation
  ngOnInit() {}

  getYears() {
    this._store.dispatch(new fromStore.LoadYears(this.breadCrumbs));
    this.data$ = this._store.pipe(select(fromStore.allYears));
    this.resetFilters();
  }

  OnItemClick(type: string, value: string) {
    this.selectedType = type;
    this.updateBreadCurmbs(type, value);
    // Reqested data we can pass throguh here if needed .
    switch (type) {
      case "makes":
        this._store.dispatch(new fromStore.LoadMakes(this.breadCrumbs));
        this.data$ = this._store.pipe(select(fromStore.make));
        break;
      case "models":
        this._store.dispatch(new fromStore.LoadModels(this.breadCrumbs));
        this.data$ = this._store.pipe(select(fromStore.model));
        break;
      case "trim":
        this._store.dispatch(new fromStore.LoadTrim(this.breadCrumbs));
        this.data$ = this._store.pipe(select(fromStore.trim));
        break;
    }
  }

  updateBreadCurmbs(type: string, value: string) {
    let vehicle = "";
    let breadCrumbs: any[] = JSON.parse(JSON.stringify(this.breadCrumbs));
    const index = this.breadCrumbs.findIndex(x => x.val === value);
    if (index == -1) {
      breadCrumbs.push({ key: type, val: value });
      this.breadCrumbs = breadCrumbs;
    } else {
      this.breadCrumbs.splice(index, this.breadCrumbs.length - 1);
    }

    this.breadCrumbs.forEach(item => {
      vehicle += " " + item.val;
    });
    this.vehicle = vehicle;
  }

  resetFilters() {
    this.breadCrumbs = [];
    this.vehicle = "";
  }

  // This will trigger before moving out from the component
  ngOnDestroy() {}
}
