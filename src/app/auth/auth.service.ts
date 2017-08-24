import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor (private angularFireAuth: AngularFireAuth) {}

  login(username: string, password: string) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(username, password).then(console.log.bind(console));
  }

  signup(username: string, password: string) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(username, password).then(console.log.bind(console));
  }

}
