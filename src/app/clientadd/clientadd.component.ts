import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientadd',
  templateUrl: './clientadd.component.html',
  styleUrls: ['./clientadd.component.css']
})
export class ClientaddComponent implements OnInit {

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
