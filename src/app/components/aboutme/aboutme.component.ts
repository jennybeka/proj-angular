import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],

})
export class AboutmeComponent implements OnInit {

   form = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    mensg: new FormControl() 
   });

  constructor() { }

  ngOnInit() {

  }

 public onSubmit() {

   console.log(this.form.value);
 }





}
