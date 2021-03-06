import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  
];


@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})


export class InfosComponent implements OnInit {

  panelOpenState = false;
  VoiturePop = ELEMENT_DATA;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }


  home(): void{
    this.router.navigate(['home']);
  }

}
