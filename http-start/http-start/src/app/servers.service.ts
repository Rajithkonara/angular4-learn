import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

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
              server.name = 'FETCHED_' + server.name;
            } 
            return data;
          }
        );
    }
} 