import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from 'firebase';

import 'rxjs/Rx';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.loggedInState.scan<User, boolean>((previousValue, user) => {
      return Boolean(user);
    }, false);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.loggedInState.scan<User, boolean>((previousValue, user) => {
      return user.uid === route.params.uid;
    }, false);
  }
}
