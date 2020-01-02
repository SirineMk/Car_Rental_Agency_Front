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
  {position: 1, name: 'khdija', weight: 1.0079, symbol: 'H'},

];

@Component({
  selector: 'app-infoslocation',
  templateUrl: './infoslocation.component.html',
  styleUrls: ['./infoslocation.component.css']
})
export class InfoslocationComponent implements OnInit {

  panelOpenState = false;
  VoiturePop = ELEMENT_DATA;

  constructor(private router: Router) { }

  ngOnInit() {
  }


  home(): void{
    this.router.navigate(['home']);
  }

}
