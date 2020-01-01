import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voitureadd',
  templateUrl: './voitureadd.component.html',
  styleUrls: ['./voitureadd.component.css']
})
export class VoitureaddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  home(): void{
    this.router.navigate(['home']);
  }
  ajouter(): void{
    console.log("hello");
  }
}
