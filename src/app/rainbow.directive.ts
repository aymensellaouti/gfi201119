import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  @HostBinding('style.color') color;
  @HostBinding('style.borderColor') bc;
  constructor() { }

  @HostListener('keyup') changeColorRandomly() {
    this.bc = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.bc = this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
