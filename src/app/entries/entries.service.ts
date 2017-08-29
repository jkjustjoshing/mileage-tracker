import { Injectable } from '@angular/core';
import { Entry } from './entry.model';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class EntriesService {
  private entries: { [name: string]: FirebaseListObservable<Entry[]> } = {};
  private totalGallonsCache: { [name: string]: Observable<number> } = {};

  constructor(private angularFireDb: AngularFireDatabase) {}

  addEntry(uid: string, entry: Entry) {
    if (!this.entries[uid]) {
      this.entries[uid] = this.getEntries(uid);
    }
    this.entries[uid].push(entry);
  }

  getEntries(uid): FirebaseListObservable<Entry[]> {
    if (!this.entries[uid]) {
      this.entries[uid] = this.angularFireDb.list(`/entries/${uid}`);
    }
    return this.entries[uid];
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
    return this.angularFireDb.object(`/entries/${uid}/${id}`);
  }

}
