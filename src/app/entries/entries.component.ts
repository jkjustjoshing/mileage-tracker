import { Component, OnInit } from '@angular/core';
import { Entry } from './entry.model';
import { EntriesService } from './entries.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
  entries: Entry[];
  totalGallons: number;


  constructor(private entriesService: EntriesService) {}

  ngOnInit() {
    this.entries = this.entriesService.entries;
    this.totalGallons = this.entriesService.totalGallons();
  }

  onEntryCreated(entry: Entry) {
    this.entriesService.addEntry(entry);

    this.totalGallons = this.entriesService.totalGallons();
  }

}
