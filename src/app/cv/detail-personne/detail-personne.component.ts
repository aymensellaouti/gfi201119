import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.cvService.findPersonneById(params.id).subscribe(
          (personne) => this.personne = personne,
          (erreur) => {
            this.router.navigate(['']);
          }
        );
      }
    );
    this.activatedRoute.queryParams.subscribe(
      (params) => {
          console.log(params);
      }
    );
  }
  deletePersonne() {
    this.cvService.deletePersonne(this.personne).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['']);
      },
      (erreur) => {
        console.log(erreur);
      }
    );
  }
}
