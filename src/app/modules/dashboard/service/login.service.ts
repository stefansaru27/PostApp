import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password }).pipe(
      tap((response) => {
        this.tokenService.setToken(response.accessToken); // Save the token
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
