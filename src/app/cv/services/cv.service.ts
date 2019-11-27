import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'aymen', 'sellaouti', 37, 1111, 'teacher', 'as.jpg'),
      new Personne(2, 'test', 'test', 37, 1111, 'teacher', '     ' ),
      new Personne(2, 'test', 'test', 37, 1111, 'teacher', '' ),
    ];
  }
  getPersonnes(): Personne[] {
    return this.personnes;
  }

}
