import { Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService) {}

  canActivate(route, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) return true;

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });

    return false;
  }

}
