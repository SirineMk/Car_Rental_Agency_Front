import { Injectable } from '@angular/core';
import { Client } from './client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private userUrl = 'http://localhost:8080/api';  // URL to REST API

  constructor(private http: HttpClient) { }

  /** GET users from the server */
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.userUrl + '/Clients');
  }

  updateClient(id, clientt): Observable<Client[]> {
    return this.http.put<Client[]>(this.userUrl + '/ModifyClient/' + id, clientt);
  }

  deleteClient(id): Observable<Client[]> {
    return this.http.delete<Client[]>(this.userUrl + '/Client/' + id);
  }

  addClient(clientt): Observable<Client[]> {
    return this.http.post <Client[]>(this.userUrl + '/Client', clientt);
  }
}
