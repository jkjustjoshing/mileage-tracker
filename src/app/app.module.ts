import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    EntryComponent,
    NewEntryComponent,
    HeaderComponent,
    NavLinkComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [EntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
