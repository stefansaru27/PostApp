import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [SharedModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
