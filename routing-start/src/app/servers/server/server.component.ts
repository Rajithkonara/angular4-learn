import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, 
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit() {
      // + converts string to a number
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params 
      .subscribe(
        (params: Params) => {
           this.server = this.serversService.getServer(+params['id']);
        }
      );
  }

  onReload () {
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }

  onEdit () {
    //relative path
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
