import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Entry } from '../entry/entry.model';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {
  @Output()
  entryCreated = new EventEmitter<Entry>();

  entry: Entry = new Entry();

  constructor() { }

  ngOnInit() {
  }

  createEntry() {
    this.entryCreated.emit(this.entry);
    this.entry = new Entry();
  }

}
