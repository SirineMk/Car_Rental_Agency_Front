import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Voiture } from '../services/voiture';
import { VoitureService} from '../services/voiture.service';
import * as moment from 'moment';



@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
  voitures: Voiture[];

  constructor(private router: Router, private voitureService: VoitureService, private route: ActivatedRoute) {}

  element: Voiture = new Voiture();
  events: string[] = [];
  opened: boolean;
  nb_tot: number;


  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['chassis', 'immat', 'marque', 'modele', 'dmc', 'puissance', 'cylindres', 'prix', 'assureur', 'typeassuance', 'cotisation', 'modif'];
  dataSource = new MatTableDataSource<Voiture>(this.voitures);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.getVoitures();
    this.dataSource.paginator = this.paginator;
  }

  formattedDate(datte) {
    return moment(new Date(datte)).format('DD/MM/YYYY');
  }

  getVoitures(): void {
    this.voitureService.getvoitures().subscribe(voitures => this.voitures = voitures );
    this.voitureService.getNbVoitures().subscribe(voiture => this.nb_tot = voiture );
  }

  modifier(voiture): void {
    this.voitureService.updateVoiture(voiture.immat, voiture).subscribe(voitures => this.voitures = voitures );
    alert('Car edited!');
  }


  delete(immat): void {
    this.voitureService.deleteVoiture(immat).subscribe(voitures => this.voitures = voitures );;
    this.router.navigate(['voiture']);
    alert('Car deleted!');
  }

  ajouter(): void{
    this.router.navigate(['addcar']);
  }

  infos(): void{
    this.router.navigate(['infos']);
  }

  home(): void{
    this.router.navigate(['home']);
  }
}
