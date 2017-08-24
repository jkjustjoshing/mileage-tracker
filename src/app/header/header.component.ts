import { User } from 'firebase';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentUser: User;

  constructor (private authService: AuthService) {}

  ngOnInit() {
    this.authService.loggedInState.subscribe(user => {
      this.currentUser = user;
    });
  }

  onLogout() {
    this.authService.logout();
  }

}
