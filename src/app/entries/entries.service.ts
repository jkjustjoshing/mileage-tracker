import { Injectable } from '@angular/core';
import { Entry, EntryDbModel } from './entry.model';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class EntriesService {
  private entries: { [name: string]: FirebaseListObservable<EntryDbModel[]> } = {};
  private totalGallonsCache: { [name: string]: Observable<number> } = {};

  constructor(private angularFireDb: AngularFireDatabase) {}

  addEntry(uid: string, entry: Entry) {
    if (!this.entries[uid]) {
      this.getEntries(uid);
    }
    return this.entries[uid].push(entry.serialize());
  }

  getEntries(uid): Observable<Entry[]> {
    if (!this.entries[uid]) {
      this.entries[uid] = this.angularFireDb.list(`/${uid}/entries`);
    }
    return this.entries[uid].map((entries: EntryDbModel[]) => {
      return entries.map(entry => {
        return new Entry(entry);
      });
    });
  }

  totalGallons(uid): Observable<number> {
    if (!this.totalGallonsCache[uid]) {
      this.totalGallonsCache[uid] = this.entries[uid].scan((acc, arr: Entry[]) => {
        return arr.reduce((sum, next) => {
          return sum + next.gallons;
        }, 0);
      }, 0);
    }
    return this.totalGallonsCache[uid];
  }

  getEntry(uid: string, id: string): FirebaseObjectObservable<Entry> {
    console.log('getting entry');
    return this.angularFireDb.object(`/${uid}/entries/${id}`);
  }

}
