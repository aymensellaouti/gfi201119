import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color: string;
  defaultColor = 'red';
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (routeParams) => {
       this.color = routeParams.couleur;
      }
    )
  }
  changeColor(colorInput: string) {
    this.color = colorInput;
  }
  reset() {
    this.color = this.defaultColor;
  }
}
