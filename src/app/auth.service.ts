// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly USER_KEY = 'user';
  private readonly searchCount = 'searchCount'

  constructor() { }

  login(name: string): void {
    localStorage.setItem(this.USER_KEY, name);
  }

  logout(): void {
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.searchCount)
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem(this.USER_KEY)) {
      return true;
    }
    else {
      return false;
    }
  }

  getUserName(): string | null {
    return localStorage.getItem(this.USER_KEY);
  }
}
