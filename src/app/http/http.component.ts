import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
const API_LINK = 'https://immense-citadel-91115.herokuapp.com/api/personnes';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get(API_LINK).subscribe(
      (data) => console.log(data)
    );
  }

}
