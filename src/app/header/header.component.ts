import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentPage: string;

  @Output()
  public pageChange = new EventEmitter<string>();


  constructor() {
    this.currentPage = 'vehicles';
  }

  ngOnInit() {
    this.pageChange.emit(this.currentPage);
  }

  navigateTo(page: string) {
    if (this.currentPage !== page) {
      this.currentPage = page;
      this.pageChange.emit(page);
    }
  }

}
