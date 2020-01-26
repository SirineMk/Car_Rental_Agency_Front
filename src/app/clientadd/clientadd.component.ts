import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../services/client';
import { ClientService} from '../services/client.service';
import {Adress} from '../services/adress';
import * as moment from 'moment';
import {formattedError} from '@angular/compiler';

@Component({
  selector: 'app-clientadd',
  templateUrl: './clientadd.component.html',
  styleUrls: ['./clientadd.component.css']
})
export class ClientaddComponent implements OnInit {

  client: Client = new Client();
  clients: Client[];

  constructor(private router: Router, private clientService: ClientService) { }


  ngOnInit() {
    this.client.adresse = new Adress();
  }
  home(): void{
    this.router.navigate(['home']);
  }

  wait(ms){
    let start = new Date().getTime();
    let end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }
  }

  formattedDate(datte) {
    return moment(new Date(datte)).format('DD/MM/YYYY');
  }


  ajouter(): void {

    this.clientService.addClient(this.client).subscribe(clients => this.clients = clients );
    alert('client added!');
    this.clientService.getClients().subscribe(clients => this.clients = clients );
    this.wait(1000);
   // window.location.reload();
    this.router.navigate(['client'], { queryParams: { clients:  this.clients, force : 1 } });

  }

}
