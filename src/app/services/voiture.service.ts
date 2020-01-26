import { Injectable } from '@angular/core';
import { Voiture } from './voiture';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  private userUrl = 'http://localhost:8080/';  // URL to REST API

  constructor(private http: HttpClient) { }

  /** GET voitures from the server */
  getvoitures(): Observable<Voiture[]> {
    return this.http.get<Voiture[]>(this.userUrl + '/Voitures');
  }

  getNbVoitures(): Observable<number> {
    return this.http.get<number>(this.userUrl + '/NbVoitures');
  }

  updateVoiture(immat, car): Observable<Voiture[]> {
    return this.http.put<Voiture[]>(this.userUrl + '/ModifyVoiture/' + immat, car);
  }

  deleteVoiture(id): Observable<Voiture[]> {
    return this.http.delete<Voiture[]>(this.userUrl + '/VoitureImm/' + id);
  }

  addVoiture(voiture): Observable<Voiture[]> {
    return this.http.post <Voiture[]>(this.userUrl + '/Voiture', voiture);
  }
}
