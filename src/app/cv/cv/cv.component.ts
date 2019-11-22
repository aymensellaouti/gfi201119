import { Component, OnInit } from '@angular/core';
import {Personne} from '../Model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  selectedPersonne: Personne;
  constructor() { }

  ngOnInit() {
  }

  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
