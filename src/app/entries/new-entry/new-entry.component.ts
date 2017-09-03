import { EntriesService } from './../entries.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Entry } from '../entry.model';
import { calendar } from 'octicons';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent implements OnInit {
  @Output()
  entryCreated = new EventEmitter<Entry>();

  entry: Entry = new Entry();
  calendarIcon: SafeHtml;
  foo: any;

  constructor(private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private entriesService: EntriesService,
    private router: Router) { }

  ngOnInit() {
    this.calendarIcon = this.sanitizer.bypassSecurityTrustHtml(calendar.toSVG());
    this.foo = console.log.bind(console);
  }

  createEntry(entry: Entry) {
    const uid = this.route.snapshot.params.uid;
    this.entriesService.addEntry(uid, entry).then(() => {
      return this.router.navigate(['..'], { relativeTo: this.route });
    });
  }

}
