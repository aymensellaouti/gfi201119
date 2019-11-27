import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../Model/personne';
import {EmbaucheService} from '../services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input()personne: Personne;
  constructor(
    public embaucheService: EmbaucheService
  ) { }

  ngOnInit() {
  }

  embaucher() {
    this.embaucheService.embaucher(this.personne);
  }
}
