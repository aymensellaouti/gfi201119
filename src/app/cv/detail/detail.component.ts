import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../Model/personne';
import {EmbaucheService} from '../services/embauche.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input()personne: Personne;
  constructor(
    public embaucheService: EmbaucheService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  embaucher() {
    this.embaucheService.embaucher(this.personne);
  }

  goToDetail() {
    this.router.navigate(['cv/detail', this.personne.id]);
  }
}
