import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { EntryComponent } from './entries/entry/entry.component';
import { NewEntryComponent } from './entries/new-entry/new-entry.component';
import { HeaderComponent } from './header/header.component';
import { NavLinkComponent } from './header/nav-link/nav-link.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { EntriesService } from './entries/entries.service';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { EntryDetailsComponent } from './entries/entry-details/entry-details.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { SignupComponent } from './auth/signup/signup.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'entries',
    component: EntriesComponent
  },
  {
    path: 'entries/:id',
    component: EntryDetailsComponent
  },
  {
    path: 'vehicles',
    component: VehiclesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    EntryComponent,
    NewEntryComponent,
    HeaderComponent,
    NavLinkComponent,
    DropdownDirective,
    VehiclesComponent,
    EntryDetailsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [EntriesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
