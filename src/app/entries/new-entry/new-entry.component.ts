import { EntriesService } from './../entries.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Entry, EntryInput } from '../entry.model';
import { calendar } from 'octicons';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent implements OnInit {
  @Output()
  entryCreated = new EventEmitter<Entry>();

  entry: EntryInput = <EntryInput> {};
  calendarIcon: SafeHtml;

  constructor(private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private entriesService: EntriesService,
    private router: Router) { }

  ngOnInit() {
    this.calendarIcon = this.sanitizer.bypassSecurityTrustHtml(calendar.toSVG());
  }

  createEntry(entry: EntryInput) {
    const uid = this.route.snapshot.params.uid;
    this.entriesService.addEntry(uid, new Entry(entry)).then(() => {
      return this.router.navigate(['..'], { relativeTo: this.route });
    });
  }

}
