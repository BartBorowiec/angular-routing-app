import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // jeżeli użytkownik nie jest zalogowany...
    const isLoggedIn = this.authService.isLoggedIn$.value;
    if(!isLoggedIn) {
      // ...przekieruj użytkownika do strony z logowaniem
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
