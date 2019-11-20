import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color: string;
  defaultColor = 'red';
  constructor() { }
  ngOnInit() {
    this.color = this.defaultColor;
  }
  changeColor(colorInput: string) {
    this.color = colorInput;
  }
  reset() {
    this.color = this.defaultColor;
  }
}
