import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { Client } from '../services/client';
import { ClientService} from '../services/client.service';
import * as moment from 'moment';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbDateISOParserFormatter} from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter';
import {Adress} from '../services/adress';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: Client[];
  force: number;
  constructor(private router: Router, private clientService: ClientService, private route: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.scrollTo(0, 0);
      }
    });
  }


  element: Client = new Client();

  events: string[] = [];
  opened: boolean;


  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['cin', 'permis', 'nom', 'prenom', 'birth', 'rue', 'ville', 'codep', 'modif'];
  dataSource = new MatTableDataSource<Client>(this.clients);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {
    this.element.adresse = new Adress();
    this.route.queryParams.subscribe(param => this.force = param.force);
    if (this.force == 1) {
       this.route.queryParams.subscribe(param => this.clients = param.clients);
      // this.route.queryParamMap.subscribe(params => this.clients = params.getAll('clients'));
       this.clientService.getClients().subscribe(clients => this.clients = clients );
    } else {
      this.getClients();
    }
    this.dataSource.paginator = this.paginator;
  }

  formattedDate(datte) {
    return moment(new Date(datte)).format('DD/MM/YYYY');
  }

  getClients(): void {
    this.clientService.getClients().subscribe(clients => this.clients = clients );
  }




  modifier(client): void {
    this.clientService.updateClient(client.ncin, client).subscribe(clients => this.clients = clients );
   // this.router.navigate(['client']);
    alert('Client edited!');
  }


  delete(cin): void {
    this.clientService.deleteClient(cin).subscribe(clients => this.clients = clients );;
    this.router.navigate(['client']);
    alert('Client deleted!');
  }

  ajouter(): void {
    this.router.navigate(['addclient']);
  }

  infos(): void {
    this.router.navigate(['infosclient']);
  }

  home(): void {
    this.router.navigate(['home']);
  }
}

