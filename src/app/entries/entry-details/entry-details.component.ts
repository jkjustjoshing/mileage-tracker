import { EntriesService } from './../entries.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Entry } from './../entry.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.scss']
})
export class EntryDetailsComponent implements OnInit {
  public entry: Entry;

  constructor(private route: ActivatedRoute, private entryService: EntriesService) { }

  ngOnInit() {
    this.route.params
      .flatMap(params => this.entryService.getEntry(params.id))
      .subscribe(entry => this.entry = entry);
  }

}
