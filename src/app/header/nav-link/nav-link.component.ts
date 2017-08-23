import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent implements OnInit {

  @Input()
  public active: boolean;

  @Input()
  public target: string;

  constructor() { }

  ngOnInit() {
  }

}
