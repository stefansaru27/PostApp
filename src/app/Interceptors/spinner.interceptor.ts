import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from '../modules/dashboard/service/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('SpinnerInterceptor: Request started');
    this.spinnerService.isLoading$.next(true);

    // Handle the request and return the observable
    return next.handle(req).pipe(
      // Hide the spinner when the request completes
      finalize(() => {
        this.spinnerService.isLoading$.next(false);
        console.log('SpinnerInterceptor: Request completed');
      })
    );
  }
}
