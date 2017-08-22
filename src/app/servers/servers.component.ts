import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry/entry.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  entry: Entry = new Entry();

  entries: Entry[] = [];

  ngOnInit() {
  }

  createEntry() {
    this.entries.unshift(this.entry);
    this.entry = new Entry();
  }

}
