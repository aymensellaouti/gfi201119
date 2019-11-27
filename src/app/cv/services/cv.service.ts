import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];
  constructor(
    private router: Router
  ) {
    this.personnes = [
      new Personne(1, 'aymen', 'sellaouti', 37, 1111, 'teacher', 'as.jpg'),
      new Personne(2, 'test', 'test', 37, 1111, 'teacher', '     ' ),
      new Personne(2, 'test', 'test', 37, 1111, 'teacher', '' ),
    ];
  }
  getPersonnes(): Personne[] {
    return this.personnes;
  }
  findPersonneById(id: string): Personne {
    return this.personnes.find(
      (personne) => personne.id === +id
    );
  }
  deletePersonne(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    this.personnes.splice(index, 1);
    this.router.navigate(['']);
  }
}
