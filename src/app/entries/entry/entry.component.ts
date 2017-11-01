import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../entry.model';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input()
  public entry: Entry;

  ngOnInit() {

  }

}
