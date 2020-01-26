import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voiture } from '../services/voiture';
import { VoitureService} from '../services/voiture.service';
import {Asurance} from '../services/asurance';
import * as moment from 'moment';

@Component({
  selector: 'app-voitureadd',
  templateUrl: './voitureadd.component.html',
  styleUrls: ['./voitureadd.component.css']
})
export class VoitureaddComponent implements OnInit {
  elem: Voiture = new Voiture();
  voitures: Voiture[];

  constructor(private router: Router, private voitureService: VoitureService) { }


  ngOnInit() {
    this.elem.assurance = new Asurance();
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

    this.voitureService.addVoiture(this.elem).subscribe(voitures => this.voitures = voitures );
    alert('car added!');
    this.voitureService.getvoitures().subscribe(voitures => this.voitures = voitures );
    this.wait(1000);
    // window.location.reload();
    this.router.navigate(['voiture'], { queryParams: { clients:  this.voitures, force : 1 } });

  }

}
