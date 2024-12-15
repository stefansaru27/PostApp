import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';

import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { ContentComponent } from './content/content.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DataService } from './service/data.service';
import { PostimageService } from './service/postimage.service';
import { PostimageComponent } from './postimage/postimage.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    LeftPanelComponent,
    RightPanelComponent,
    ContentComponent,
    PostimageComponent,
  ],
  imports: [SharedModule, DashboardRoutingModule],
  providers: [DataService, PostimageService],
  exports: [DashboardComponent],
})
export class DashboardModule {}
