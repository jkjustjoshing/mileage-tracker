import { Component, OnInit, OnDestroy } from '@angular/core';
import { Entry } from './entry.model';
import { EntriesService } from './entries.service';

import { FirebaseListObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit, OnDestroy {
  entries: FirebaseListObservable<Entry[]>;
  totalGallons: number;
  subscription: Subscription;


  constructor(private entriesService: EntriesService) {}

  ngOnInit() {
    this.entries = this.entriesService.getEntries();
    this.subscription = this.entriesService.totalGallons.subscribe(gallons => {
      this.totalGallons = gallons;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEntryCreated(entry: Entry) {
    this.entriesService.addEntry(entry);
  }

}
