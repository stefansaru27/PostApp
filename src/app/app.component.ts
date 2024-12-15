import { Component } from '@angular/core';
import { SpinnerService } from './modules/dashboard/service/spinner.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public spinnerService: SpinnerService) {}
}
