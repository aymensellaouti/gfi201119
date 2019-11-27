import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private personnes: Personne[] = [];
  constructor() {
  }
  getEmbauchees(): Personne[] {
    return this.personnes;
  }
  embaucher(personne: Personne) {
    if (!this.isEmbauched(personne)) {
      this.personnes.push(personne);
    } else {
      alert('Deja embauchee');
    }
  }
  isEmbauched(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    if (index < 0) {
      return false;
    }
    return true;
  }
}
