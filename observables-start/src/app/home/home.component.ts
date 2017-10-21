import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numberObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const numbers = Observable.interval(1000);
    this.numberObsSubscription =  numbers.subscribe(
      (number: number) => {
        console.log(number)
      }
    );

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
   this.customObsSubscription = myobs.subscribe(
      (data: string) => {console.log(data); },
      (error: string) => {console.log(error); },
      () => {console.log('completed'); }
    );
  }

  ngOnDestroy(): void {
    this.numberObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}
