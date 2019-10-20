import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { ChildActivationStart } from '@angular/router';

import { Form } from "../../shared/tipo.model";

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],

})
export class AboutmeComponent implements OnInit {



   Form = new FormGroup({
     
    name: new FormControl(),
    email: new FormControl(),
    mensg: new FormControl() 
   });

  constructor() { }

  ngOnInit() {

  }

 public onSubmit() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "jennybekadutra@gmail.com",
    Password : "31d2b40c-aa26-4844-80ed-89bac6599f52",
    To : "jennybekadutra@gmail.com",
    From : "jennybekadutra@gmail.com",
    Subject : `Contato do site Jogos, feito por ${this.Form.controls.name.value},  ${this.Form.controls.email.value}`,
    Body : `Teste ${this.Form.controls.mensg.value}`
}).then(
  message => alert(message)
);
   console.log(this.Form.controls.email.value);
 }





}
