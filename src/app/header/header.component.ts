import { User } from 'firebase';
import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentUser: Observable<User>;

  constructor (private authService: AuthService) {}

  ngOnInit() {
    this.currentUser = this.authService.loggedInState;
  }

  onLogout() {
    this.authService.logout();
  }

}
