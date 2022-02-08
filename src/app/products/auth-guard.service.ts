import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  // Products page will be displayed only if user logs in
  canActivate() {
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }}
