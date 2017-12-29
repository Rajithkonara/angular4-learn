import { error } from 'selenium-webdriver';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable() 
export class ServerService {
    constructor(private http: Http) {}

    storeServers(servers: any[]) {
      // const headers = new Headers({'Content-Type': 'application/json'});
      // return this.http.post('', 
      // servers, 
      // {headers: headers});

      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.put('', 
      servers, 
      {headers: headers});

    }

    getServers() {
      return this.http.get('')
        .map(
          (response: Response) => {
            const data = response.json();
            for (const server of data) {
              server.name = 'FETCHED_' + server.name
            } 
            return data;
          }
        ).catch(
          (error: Response) => {
            console.log(error);
            return Observable.throw('something went wrong');
          }
        )
        ;
    }

    getAppName() {
      return this.http.get('')
        .map(
        (response: Response) => {
          return response.json();
         }
      );
    }
} 