import { Component, OnInit } from '@angular/core';
import {Personne} from '../Model/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  personnes: Personne[];
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'aymen', 'sellaouti', 37, 1111, 'teacher', 'as.jpg'),
      new Personne(2, 'aymen', 'sellaouti', 37, 1111, 'teacher', 'as.jpg'),
    ];
  }

}
