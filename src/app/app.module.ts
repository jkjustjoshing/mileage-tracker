import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';


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

const appRoutes: Routes = [
  // {
  //   path: '',
  //   component:
  // },
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
    EntryDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [EntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
