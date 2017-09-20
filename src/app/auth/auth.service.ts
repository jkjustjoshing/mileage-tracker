import { Router } from '@angular/router';
import { User } from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  public loggedInState: Observable<User>;

  constructor (private angularFireAuth: AngularFireAuth, private router: Router) {
    this.loggedInState = this.angularFireAuth.authState;
  }

  login(username: string, password: string) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(username, password).then(this.redirectOnLogin.bind(this));
  }

  signup(username: string, password: string) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(username, password).then(this.redirectOnLogin.bind(this));
  }

  currentUser() {
    return this.angularFireAuth.auth.currentUser;
  }
  isAuthenticated() {
    return Boolean(this.currentUser());
  }

  logout() {
    this.angularFireAuth.auth.signOut();
    return this.router.navigate(['/login']);
  }

  private redirectOnLogin(user: User) {
    return this.router.navigate(['/user', user.uid, 'vehicles']);
  }

}
