import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

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
      return this.http.get('');
    }
} 