import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-simulator',
  templateUrl: './card-simulator.component.html',
  styleUrls: ['./card-simulator.component.css']
})
export class CardSimulatorComponent implements OnInit {
  name = 'aymen';
  path = 'rotating_card_profile.png';
  constructor() { }

  ngOnInit() {
  }

}
