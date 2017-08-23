import { Component, OnInit } from '@angular/core';
import { Entry } from './entry.model';
import { EntriesService } from './entries.service';

import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
  entries: FirebaseListObservable<Entry[]>;
  totalGallons: number;


  constructor(private entriesService: EntriesService) {}

  ngOnInit() {
    this.entries = this.entriesService.getEntries();
    console.log(this.entriesService.totalGallons);
    this.entriesService.totalGallons.subscribe(gallons => {
      console.log('gallons', gallons);
      this.totalGallons = gallons;
    });
  }

  onEntryCreated(entry: Entry) {
    this.entriesService.addEntry(entry);
  }

}
