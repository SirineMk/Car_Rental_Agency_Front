import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  voiture(): void{
    this.router.navigate(['voiture']);
  }

  client(): void{
    this.router.navigate(['client']);
  }

  location(): void{
    this.router.navigate(['location']);
  }

}
