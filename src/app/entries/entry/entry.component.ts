import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input()
  public entry: any = {};

  constructor() {
    this.entry = {
      date: '2017-04-05',
      gallons: 10.888,
      odometer: 15444
    }
  }

  ngOnInit() {

  }

}
