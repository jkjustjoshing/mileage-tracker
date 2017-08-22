import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry/entry.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  entries: Entry[] = [];

  ngOnInit() {
  }

  onEntryCreated(entry: Entry) {
    this.entries.unshift(entry);
  }
}
