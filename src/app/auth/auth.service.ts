import { User } from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  public loggedInState: Observable<User>;

  constructor (private angularFireAuth: AngularFireAuth) {
    this.loggedInState = this.angularFireAuth.authState;
  }

  login(username: string, password: string) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(username, password).then(console.log.bind(console));
  }

  signup(username: string, password: string) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(username, password).then(console.log.bind(console));
  }

  currentUser() {
    return this.angularFireAuth.auth.currentUser;
  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }

}
