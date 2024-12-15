import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly tokenKey = 'token';

  constructor() {}

  // Method to save the token to local storage
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Method to retrieve the token from local storage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Method to remove the token from local storage
  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
