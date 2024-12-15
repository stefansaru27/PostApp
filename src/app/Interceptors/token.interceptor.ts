import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../modules/dashboard/service/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();

    const clonedRequest = token
      ? req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        })
      : req;

    return next.handle(clonedRequest);
  }
}
