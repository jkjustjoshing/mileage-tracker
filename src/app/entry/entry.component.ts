import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
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
