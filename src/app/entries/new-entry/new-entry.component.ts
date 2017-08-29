import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.calendarIcon = this.sanitizer.bypassSecurityTrustHtml(calendar.toSVG());
  }

  createEntry() {
    this.entryCreated.emit(this.entry);
    this.entry = new Entry();
  }

}
