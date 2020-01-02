import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import {FormBuilder, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-locationadd',
  templateUrl: './locationadd.component.html',
  styleUrls: ['./locationadd.component.css']
})
export class LocationaddComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  options: FormGroup;

  constructor(private router: Router, fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
  }
  home(): void{
    this.router.navigate(['home']);
  }
  ajouter(): void{
    console.log('hello');
  }
}
