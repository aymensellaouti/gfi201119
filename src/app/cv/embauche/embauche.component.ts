import { Component, OnInit } from '@angular/core';
import {EmbaucheService} from '../services/embauche.service';
import {Personne} from '../Model/personne';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  personnes: Personne[];
  constructor(
    private embaucheService: EmbaucheService
  ) { }

  ngOnInit() {
    this.personnes = this.embaucheService.getEmbauchees();
  }

}
