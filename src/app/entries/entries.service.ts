import { EventEmitter } from '@angular/core';
import { Entry } from './entry.model';

export class EntriesService {
  private entries: Entry[] = [];

  public entriesChanged = new EventEmitter<Entry[]>();

  addEntry(entry: Entry) {
    this.entries.unshift(entry);
    this.entriesChanged.emit(this.entries.slice());
  }

  getEntries() {
    return this.entries.slice();
  }

  totalGallons() {
    return this.entries.reduce((sum, nextEntry) => sum + nextEntry.gallons, 0);
  }
}
