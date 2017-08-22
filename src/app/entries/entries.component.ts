import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry/entry.model';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
  entries: Entry[] = [];

  ngOnInit() {
  }

  onEntryCreated(entry: Entry) {
    this.entries.unshift(entry);
  }
}
