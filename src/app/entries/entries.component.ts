import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Entry } from './entry.model';
import { EntriesService } from './entries.service';

import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
  entries: Entry[];
  totalGallons: number;

  constructor(private entriesService: EntriesService, private route: ActivatedRoute) {}

  ngOnInit() {
    const uid = this.route.snapshot.params.uid;
    const subscription = this.entriesService.getEntries(uid).subscribe(entries => {
      this.entries = entries;
      subscription.unsubscribe();
    });
    const otherSub = this.entriesService.totalGallons(uid).subscribe(gallons => {
      this.totalGallons = gallons;
      otherSub.unsubscribe();
    });
  }

}
