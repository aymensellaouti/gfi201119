import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../Model/personne';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  personnes: Personne[];
  @Output() forwardPersonne = new EventEmitter();
  constructor(
    private cvService: CvService
  ) { }

  ngOnInit() {
    this.cvService.getPersonnes().subscribe(
      personnes => this.personnes = personnes,
      (error) => {
        this.personnes = this.cvService.getFakePersonnes();
        alert('Pbm with cnx data are fake');
        console.log(error);
      }
    );
  }

  selectPersonne(personne: Personne) {
    this.forwardPersonne.emit(
      personne
    );
  }
}
