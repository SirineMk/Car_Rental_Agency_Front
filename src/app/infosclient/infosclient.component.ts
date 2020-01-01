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
  selector: 'app-infosclient',
  templateUrl: './infosclient.component.html',
  styleUrls: ['./infosclient.component.css']
})
export class InfosclientComponent implements OnInit {

  panelOpenState = false;
  VoiturePop = ELEMENT_DATA;

  constructor(private router: Router) { }

  ngOnInit() {
  }


  home(): void{
    this.router.navigate(['home']);
  }

}
