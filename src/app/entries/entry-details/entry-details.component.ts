import { EntriesService } from './../entries.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Entry } from './../entry.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.scss']
})
export class EntryDetailsComponent implements OnInit, OnDestroy {
  public entry: Entry;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private entryService: EntriesService) { }

  ngOnInit() {
    this.subscription = this.route.params
      .flatMap(params => this.entryService.getEntry(params.uid, params.id))
      .subscribe(entry => this.entry = entry);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
