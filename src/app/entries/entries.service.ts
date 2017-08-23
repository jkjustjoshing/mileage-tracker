import { Injectable } from '@angular/core';
import { Entry } from './entry.model';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class EntriesService {
  public totalGallons: Observable<number>;
  private entries: FirebaseListObservable<Entry[]>;

  constructor(private angularFireDb: AngularFireDatabase) {
    this.entries = this.angularFireDb.list('/entries');
    this.totalGallons = this.entries.scan((acc, arr: Entry[]) => {
      return arr.reduce((sum, next) => {
        console.log(next);
        return sum + next.gallons;
      }, 0);
    }, 0);
  }

  addEntry(entry: Entry) {
    this.entries.push(entry);
  }

  getEntries() {
    return this.entries;
  }

  getEntry(id): FirebaseObjectObservable<Entry> {
    console.log('getting entry');
    return this.angularFireDb.object(`/entries/${id}`);
  }

}
