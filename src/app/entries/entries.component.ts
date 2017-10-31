import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Entry } from './entry.model';
import { EntriesService } from './entries.service';
import { Observable } from 'rxjs/Observable';

import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
  entries: Observable<Entry[]>;
  totalGallons: Observable<number>;

  constructor(private entriesService: EntriesService, private route: ActivatedRoute) {}

  ngOnInit() {
    const uid = this.route.snapshot.params.uid;

    this.entries = this.entriesService.getEntries(uid);
    this.totalGallons = this.entriesService.totalGallons(uid);
  }

}
