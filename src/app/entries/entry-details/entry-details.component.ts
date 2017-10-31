import { EntriesService } from './../entries.service';
import { Observable } from 'rxjs/Observable';
import { Entry } from './../entry.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.scss']
})
export class EntryDetailsComponent implements OnInit {
  public entry: Observable<Entry>;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private entryService: EntriesService) { }

  ngOnInit() {
    this.entry = this.route.params
      .flatMap(params => this.entryService.getEntry(params.uid, params.id))
  }

}
