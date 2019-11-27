import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: ['./router-simulator.component.css']
})
export class RouterSimulatorComponent implements OnInit {
  path = '';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToRoute() {
    const link = [this.path];
    this.router.navigate(link);
  }
}
