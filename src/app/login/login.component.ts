import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormField } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  username: string;
  password: string;

  ngOnInit() {
  }

  login() : void {
    if (this.username == "admin" && this.password=="admin") {
      console.log("yess");
      this.router.navigate(['home']);
    }
  }

}
