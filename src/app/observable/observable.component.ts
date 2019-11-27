import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  path = 'as.jpg';
  imageObservable: Observable<string>;
  paths = [
    'as.jpg',
    'cv.png',
    'default.png',
    '404.png'
  ];
  constructor() {
  }
  ngOnInit() {
    this.imageObservable = new Observable<string>(
      (observer) => {
        let i = 0;
        setInterval(() => {
          observer.next(this.paths[i++]);
          if (i === this.paths.length) {
            i = 0;
          }
        }, 1000);
      }
    );
    this.imageObservable.subscribe(
      (image) => this.path = image
    );
    const observable = new Observable<number>(
      (observer) => {
        let i = 5;
        setInterval(() => {
          if (!i) {
            observer.error();
          }
          observer.next(i--);
        }, 1000);
      });
    observable.subscribe((val) => {
      console.log(val);
    });
    observable.subscribe((val) => {
      console.log(val * 2);
    },
      error => console.log(error),
      () => console.log('Bye')
    );
  }
}
