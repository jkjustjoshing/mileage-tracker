import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './auth/auth-guard.service';
import { EntryDetailsComponent } from './entries/entry-details/entry-details.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { EntriesComponent } from './entries/entries.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

const appRoutes: Routes = [
  { path: 'login',       component: LoginComponent },
  { path: 'signup',      component: SignupComponent },
  { path: 'entries',     component: EntriesComponent,      canActivate: [AuthGuardService] },
  { path: 'entries/:id', component: EntryDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'vehicles',    component: VehiclesComponent,     canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
