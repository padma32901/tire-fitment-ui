import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreModule } from "@ngrx/store";

import { reducers } from "./store";

import { FitmentContainerComponent } from "./fitment-container/fitment-container.component";
import { FitmentService } from "./services/fitment.service";
import { EffectsModule } from "@ngrx/effects";
import { VehicleEffects } from "./store/effects/vehicle.effect";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("fitment", reducers),
    EffectsModule.forRoot([VehicleEffects])
  ],

  declarations: [FitmentContainerComponent],
  exports: [FitmentContainerComponent],
  providers: [FitmentService]
})
export class FitmentModule {}
