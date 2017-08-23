import { Entry } from './entry.model';

export class EntriesService {
  public entries: Entry[] = [];

  addEntry(entry: Entry) {
    this.entries.unshift(entry);
  }

  totalGallons() {
    return this.entries.reduce((sum, nextEntry) => sum + nextEntry.gallons, 0);
  }
}
