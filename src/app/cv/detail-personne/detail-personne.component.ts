import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Personne} from '../Model/personne';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css']
})
export class DetailPersonneComponent implements OnInit {
  personne: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.personne = this.cvService.findPersonneById(params.id);
      }
    );
  }
  deletePersonne() {
    this.cvService.deletePersonne(this.personne);
  }
}
