import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [SharedModule, RegisterRoutingModule],
})
export class RegisterModule {}
