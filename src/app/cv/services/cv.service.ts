import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const API_LINK = 'https://apilb.tridevs.net/explorer/api/personnes';
@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.personnes = [
      new Personne(1, 'aymen', 'sellaouti', 37, 1111, 'teacher', 'as.jpg'),
      new Personne(2, 'test', 'test', 37, 1111, 'teacher', '     ' ),
      new Personne(2, 'test', 'test', 37, 1111, 'teacher', '' ),
    ];
  }
  getFakePersonnes(): Personne[] {
    return this.personnes;
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(API_LINK);
  }
  findPersonneById(id: string): Observable<Personne> {
    return this.http.get<Personne>(API_LINK + `/${id}`);
  }
  deletePersonne(personne: Personne): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.delete<Personne>(API_LINK + `/${personne.id}`, {headers});
  }
}
