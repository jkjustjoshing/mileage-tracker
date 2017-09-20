import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { User } from 'firebase';

import 'rxjs/Rx';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.loggedInState.map((user) => {
      if (!user) {
        this.router.navigate(['/login']);
      }
      return Boolean(user);
    });
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.loggedInState.map((user) => {
      if (!user) {
        this.router.navigate(['/login']);
        return false;
      }
      return user.uid === route.params.uid;
    });
  }
}


@Injectable()
export class NotAuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.loggedInState.map((user) => {
      if (user) {
        this.router.navigate(['/user', user.uid, 'entries']);
        return false;
      }
      return true;
    });

    // scan<User, boolean>((previousValue, user) => {
    //   if (user) {
    //     return this.router.navigate(['/user', user.uid, 'entries']);
    //   }
    //   return true;
    // }, false);
  }
}

