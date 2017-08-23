import { Directive, OnInit, Input, HostBinding, Renderer2, ElementRef} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  // tslint:disable-next-line
  @Input('appDropdown')
  public triggerEle: any;

  @HostBinding('class.show')
  public dropdownOpen = false;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
    console.log('foo');
  }

  ngOnInit() {
    console.log(this.triggerEle);
    this.renderer.listen(this.triggerEle, 'click', this.toggle);
  }

  toggle = () => {
    this.dropdownOpen = !this.dropdownOpen;
  }

}
