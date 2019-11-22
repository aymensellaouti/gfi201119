import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() in = 'yellow';
  @Input() out = 'red';
  @HostBinding('style.backgroundColor') bg = this.out ;
  constructor() { }
  @HostListener('mouseenter') enter() {
    this.bg = this.in;
  }
  @HostListener('mouseleave') leave() {
    this.bg = this.out;
  }
}
