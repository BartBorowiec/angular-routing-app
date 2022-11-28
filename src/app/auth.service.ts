import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject(false);
  
  constructor() { }

  login(username: string, password: string): boolean {
    if(username == "jacek" && password == "1234") {
      this.isLoggedIn$.next(true);
      return true;
    }
    else {
      this.isLoggedIn$.next(false);
      return false;
    } 
  }

  logout() {
    this.isLoggedIn$.next(false);
  }
}
