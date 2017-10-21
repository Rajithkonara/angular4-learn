import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const numbers = Observable.interval(1000);
    // numbers.subscribe(
    //   (number: number) => {
    //     console.log(number)
    //   }
    // );
    const myobs = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('First Package')
      },  2000);
      setTimeout(() => {
        observer.next('Second Package')
      },  4000);
      setTimeout(() => {
        // observer.error('ERROR _')
        observer.complete();
      },  5000);
      setTimeout(() => {
        observer.next('Third Package')
      },  6000);
    });
    myobs.subscribe(
      (data: string) => {console.log(data); },
      (error: string) => {console.log(error); },
      () => {console.log('completed'); }
    );
  }
}
